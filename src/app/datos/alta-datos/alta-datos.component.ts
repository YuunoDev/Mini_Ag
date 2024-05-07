import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
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
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './alta-datos.component.html',
  styleUrl: './alta-datos.component.css'
})


export class AltaDatosComponent {
  dato!: Datos;
  dias!: Dias[];
  datos!: Datos[];
  numCitas: number=0;
  

  
  @Input() marca: string='';
  @Input() anio: number=0;
  @Input() modelo: string='';
  @Input() precio: number=0;


  @Output() propagar = new EventEmitter<number>();

  onPropagar(){
    this.propagar.emit(this.numCitas);
  }

  constructor(private datosService: DatosService, public dialog: MatDialog){}

  openDialog() {
    if (this.checkArray()==true) {
      this.dialog.open(DialogContenidoComponent);
    }else{
      this.dialog.open(DialogErrorComponent);
    }
    
  }

  checkArray(){
    if (this.dato.anio!=0 && this.dato.correo!='' && this.dato.dias!='' && this.dato.fecha!='' && this.dato.hora!='' &&
        this.dato.telefono!='') {
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
  nuevoCliente():void{
    this.openDialog();
    if (this.checkArray()==true) {
      this.datosService.agregarDatos(this.dato);
    }
    this.dato = this.datosService.nuevoCliente();
  }

  selected = new FormControl('valid', [Validators.required]);

  selectFormControl = new FormControl('valid', [Validators.required]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
}

