import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
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
    }
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log('Usuario Logueado con Exito')
      console.log(response);
      if (response.user.email) {
        localStorage.setItem('userId', response.user.email)
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
