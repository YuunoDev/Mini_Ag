import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, HomeComponent, MatIconModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  
  loggedIn:boolean = this.userService.isLoggedIn();
  admin:boolean = this.userService.isAdmin();
  cuenta:any;

  constructor(private router: Router, public userService: UserService ) {
    const nombre = localStorage.getItem('userId');
    this.cuenta = nombre;
   }

  ngOnInit(): void {
    console.log(this.cuenta)
    console.log(this.admin)
  } 

  buscarMarca(marca: string) {
    this.router.navigate(
      ['/buscar'],
      { queryParams: { brand: marca } }
    );
  }

  logout(){
    this.userService.logOut();
    localStorage.removeItem('userId');
    localStorage.removeItem('admin')
    location.reload();
  }
}
