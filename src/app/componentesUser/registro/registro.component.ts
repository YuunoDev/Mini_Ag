import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      pass2: new FormControl('', )
    })
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
}
