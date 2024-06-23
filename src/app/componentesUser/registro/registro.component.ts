import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule, CommonModule ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  formReg : FormGroup;

  constructor(private userService: UserService){
    this.formReg = new FormGroup({
      cuenta: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      pass2: new FormControl('', [this.PasswordValidator])
    }, {validators:this.PasswordValidator} as  AbstractControlOptions)
  }

  ngOnInit(): void {
    
  }

  async onSubmit(){
    this.userService.register(this.formReg.value)
    const response = await this.userService.addUser(this.formReg.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  PasswordValidator:  ValidatorFn  = (control:AbstractControl):  ValidationErrors|  null  =>{
    const  password  =  control.get('pass');
    const  confirmpassword  =  control.get('pass2');
    if(password  &&  confirmpassword  &&  password.value  !=  confirmpassword.value){
      return {
        passwordmatcherror :  true
      }
    }
    return  null;
  }
}
