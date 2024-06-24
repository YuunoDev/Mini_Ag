import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-telefono',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule, RouterOutlet],
  templateUrl: './login-telefono.component.html',
  styleUrl: './login-telefono.component.css'
})
export class LoginTelefonoComponent implements OnInit{
  formTelefono: FormGroup;

  constructor(private userService:UserService, private auth:Auth, private router:Router, private toastr: ToastrService){
    this.formTelefono = new FormGroup ({
      telefono: new FormControl()
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(){
    this.userService.loginConTelefono(this.formTelefono.value)
    .then(response => {
      console.log(response);
      localStorage.setItem('userId', this.formTelefono.controls['telefono'].value);
      location.reload();
      this.toastr.success('Bienvenido ' + localStorage.getItem("userId"), 'Sesion Iniciada');
    })
    .catch(error => console.log(error));
  }
}
