import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-formulario-clase',
  templateUrl: './formulario-clase.component.html',
  styleUrls: ['./formulario-clase.component.css']
})
export class FormularioClaseComponent implements OnInit {
  user: Usuario = new Usuario()
  users: Usuario[] = []
  constructor() { }

  ngOnInit(): void {
  }

  insertar(): void{
    this.users.push(this.user)
    this.user = new Usuario()
    localStorage.setItem('backup',JSON.stringify(this.users))
  }

  datosEntrada(edad:number){
    if(edad>18){
      alert("TU ENTRADA A LA DISCOTECA HA SIDO COMPRADA")
    }else{
      alert("NO PUEDE COMPRAR UNA ENTRADA, ERES MENOR DE EDAD")
    }
  }
}
