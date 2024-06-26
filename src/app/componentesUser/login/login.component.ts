import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { user } from '../../user.interface';
import { Auth } from '@angular/fire/auth';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule, RouterOutlet  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;
  users!: user[] ;

  constructor(private userService:UserService, private auth:Auth, private router:Router, private toastr: ToastrService, private http: HttpClient){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      pass: new FormControl(), 
      telefono : new FormControl(),
    })
  }


  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.router.navigate(['/home']);
    }else{
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      })
    }
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log('Usuario Logueado con Exito')
      console.log(response);
      if (response.user.email) {
        localStorage.setItem('userId', response.user.email)
        console.log(localStorage.getItem('userId'))
        for(let user of this.users){
          console.log(user.email)
          if (user.email.toLowerCase() == localStorage.getItem('userId')) {
            const email = {
              correo: user.email
            }
            this.http.post(environment.apiUrl+'/database', email)
            .pipe(map((obj:any) => obj)).subscribe((descuento: string) => {
              localStorage.setItem('descuento', descuento);
              console.log(descuento);
            })
            if (user.isAdmin == true) {
              localStorage.setItem('admin', 'true');
              console.log('Admin encontrado')
            }
          }
        }
      }
      this.toastr.success('Bienvenido ' + localStorage.getItem("userId"), 'Sesion Iniciada');
      setTimeout(function(){
        console.log("Delayed for 1 second.");
        location.reload()
      }, 1800);
    })
    .catch(error => {
      console.log(error);
      this.toastr.error('Correo o contraseña incorrectos', 'Error');
    });
  }
}
