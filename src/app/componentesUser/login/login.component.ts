import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { user } from '../../user.interface';
import { Auth } from '@angular/fire/auth';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private userService:UserService, private auth:Auth, private router:Router, private toastr: ToastrService){
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
          console.log(user.correo)
          
          if (user.correo == localStorage.getItem('userId')) {
            console.log('Dentro del if')
            if (user.isAdmin == true) {
              localStorage.setItem('admin', 'true');
              console.log('Admin encontrado')
            }
          }
        }
      }
      location.reload();
      this.toastr.success('Bienvenido ' + localStorage.getItem("userId"), 'Sesion Iniciada');
    })
    .catch(error => {
      console.log(error);
      this.toastr.error('Correo o contraseña incorrectos', 'Error');
    });
  }

}
