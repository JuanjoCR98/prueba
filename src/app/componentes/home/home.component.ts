import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  usuarios2: Usuario[] = [
    {nombre:"Juanjo",apellidos:"Cortes",edad:22},
    {nombre:"Oscar",apellidos:"Ramirez",edad:27},
    {nombre:"Ana",apellidos:"Garcia",edad:14}
  ]

  usuario3: Usuario = new Usuario("Mario","Cortes")

  constructor() { }
 
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Hasta lueee")
  }

}
