import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string = "Juanjo Cortes Ramirez"
  mes: string = "ENERO"
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint expedita"
  fecha: Date = new Date()
  dinero: number = 12.40
  numero_pi: number = Math.PI
  dni:number
  preposiciones: string[] = ['a','ante','bajo','cabe','con','contra','de','desde']
  usuarios = [
    {nombre: "Juanjo", apellido: "Cortes", edad: 22},
    {nombre: "Dani", apellido: "Muresan", edad: 21},
    {nombre: "Raul", apellido: "Salazar", edad: 23}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
