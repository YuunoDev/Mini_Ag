import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { user } from '../../user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-usuarios',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './reporte-usuarios.component.html',
  styleUrl: './reporte-usuarios.component.css'
})
export class ReporteUsuariosComponent {

  users!: user[]; 

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
