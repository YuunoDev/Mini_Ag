import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DatosService } from '../datos.service';
import { Datos,Dias } from '../datos.model';
import { Input, Output, EventEmitter } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogContenidoComponent } from './dialog-contenido/dialog-contenido.component';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { UserService } from '../../user.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alta-datos',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, 
    MatInputModule, MatButtonModule, ReactiveFormsModule, DatePipe],
  templateUrl: './alta-datos.component.html',
  styleUrl: './alta-datos.component.css'
})


export class AltaDatosComponent implements OnInit
{
  dato!: Datos;
  dias!: Dias[];
  datos!: Datos[];
  numCitas: number=0;

  currentDate = new Date();
  
  formCita : FormGroup;
  
  @Input() marca: string='';
  @Input() anio: number=0;
  @Input() modelo: string='';
  @Input() precio: number=0;


  @Output() propagar = new EventEmitter<number>();

  onPropagar(){
    this.propagar.emit(this.numCitas);
  }

  constructor(private userService: UserService ,private datosService: DatosService, public dialog: MatDialog, private http: HttpClient){
    this.formCita = new FormGroup({
      fecha: new FormControl(),
      hora: new FormControl(),
      nombre: new FormControl(),
      telefono: new FormControl(),
      correo: new FormControl(),
      dias: new FormControl()
    })
  }

  openDialog() {
    if (this.checkArray()==true) {
      this.dialog.open(DialogContenidoComponent);
    }else{
      this.dialog.open(DialogErrorComponent);
    }
    
  }

  checkArray(){
    if (this.dato.anio!=null && this.dato.correo!=null && this.dato.dias!=null && this.dato.fecha!=null && this.dato.hora!=null &&
        this.dato.telefono!=null) {
      return true;
    }else{
      return false;
    }
  }

  ngOnInit(){
    this.dato = this.datosService.nuevoCliente();
    this.dato.anio=this.anio;
    this.dato.marca=this.marca;
    this.dato.modelo=this.modelo;
    this.dato.precio=this.precio;
    this.dias = this.datosService.getDias();
    this.datos = this.datosService.getDatos();
    this.datos.forEach(item => {
      if (item.modelo==this.dato.modelo) {
        this.numCitas += 1;
      }
    })
    this.onPropagar();
  }

  async onSubmit(){
    this.dato.anio=this.anio;
    this.dato.marca=this.marca;
    this.dato.modelo=this.modelo;
    this.dato.precio=this.precio;
    this.dato.fecha = this.formCita.value.fecha
    this.dato.hora = this.formCita.value.hora
    this.dato.nombre = this.formCita.value.nombre
    this.dato.telefono = this.formCita.value.telefono
    this.dato.correo = this.formCita.value.correo
    this.dato.dias = this.formCita.value.dias
    this.openDialog()
    console.log(this.formCita.value.dias)
    if(!this.checkArray()){
      return
    }
    const response = await this.userService.addCita(this.dato)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
    const correoCita = {
      asunto: 'Datos de tu Cita', 
      mensaje: 'Marca: ' + this.marca + "\n"
             + 'Modelo: ' + this.modelo + "\n"
             + 'Año: ' + this.anio + "\n"
             + 'Fecha: ' + this.dato.fecha + "\n"
             + 'Hora: ' + this.dato.hora + "\n"
             + 'Dias de renta: ' + this.dato.dias + "\n"
             + 'A nombre de: ' + this.dato.nombre + "\n"
             + 'Total de la renta: ' + (this.precio*parseInt(this.dato.dias)) + " dolares",
      correo: this.dato.correo
    }
    this.http.post('http://localhost:3000/cita', correoCita);
  }

  // nuevoCliente():void{
  //   this.openDialog();
  //   if (this.checkArray()==true) {
  //     this.datosService.agregarDatos(this.dato);
  //   }
  //   this.dato = this.datosService.nuevoCliente();
  // }

  selected = new FormControl('valid', [Validators.required]);

  selectFormControl = new FormControl('valid', [Validators.required]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
}

