import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPhoneNumber, RecaptchaVerifier, authState} from '@angular/fire/auth';
import { Firestore, deleteDoc,addDoc, doc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { user } from './user.interface';
import { Datos } from './datos/datos.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth, private firestore:Firestore) { 

  }

  register({email, pass}: any){
    return createUserWithEmailAndPassword(this.auth, email, pass)
  }

  login({email, pass}: any){
    return signInWithEmailAndPassword(this.auth,email,pass);
  }

  loginConTelefono({telefono}:any){
    const applicationVerifier=new RecaptchaVerifier(this.auth,'recaptcha-container', {
      size: 'invisible',
      callback: (response: any) => {
        console.log(telefono);
        console.log('Recaptcha verified');
      }
    });
    return signInWithPhoneNumber(this.auth,telefono,applicationVerifier)
    .then(confirmationResult => {
      const verificationCode = prompt('Por favor, ingrese el código de verificación que recibió en su teléfono');
      if (verificationCode != null) {
        // Usamos el código de verificación para confirmar el inicio de sesión
        confirmationResult.confirm(verificationCode)
        .then(result => {
          console.log('Sesion Iniciada');
          console.log(result)
        }).catch(error => {
          console.log(error)
        })
      } 
    })
    .catch(error => {
      console.log(error)
    })
  }


  logOut(){
    return signOut(this.auth);
  }

  addUser(user:user){
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  getUsers(){
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id' }) as Observable<user[]>;
  }

  isLoggedIn(){
    return !!localStorage.getItem('userId');
  }

  isAdmin(){
    return !!localStorage.getItem('admin');
  }

  addCita(dato:Datos){
    const citasRef = collection(this.firestore, 'citas');
    return addDoc(citasRef, dato);
  }

  getCitas(){
    const citasRef = collection(this.firestore, 'citas');
    return collectionData(citasRef, { idField: 'id' }) as Observable<Datos[]>;
  }
  
  deleteCita(dato: Datos) {
    const placeDocRef = doc(this.firestore, `citas/${dato.id}`);
    return deleteDoc(placeDocRef);
  }
}
