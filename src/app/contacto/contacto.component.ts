import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  formCont: FormGroup;

  constructor(private http: HttpClient, private toastr: ToastrService){
    this.formCont = new FormGroup({
      nombre: new FormControl(),
      mensaje: new FormControl()
    })
  }

   async onSubmit(){
    console.log('Submit llamado')
    this.http.post(environment.apiUrl+'/contacto', this.formCont.value).subscribe(response => {
      console.log('Correo enviado', response);
    }, error => {
      console.log('Error al enviar el correo', error);
    });
    this.toastr.success('Su correo sera respondido en los proximos dias', 'Mensaje Enviado');
  }
}

