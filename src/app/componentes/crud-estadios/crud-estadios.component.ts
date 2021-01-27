import { Component, OnInit } from '@angular/core';
import { Estadio } from 'src/app/clases/estadio';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-crud-estadios',
  templateUrl: './crud-estadios.component.html',
  styleUrls: ['./crud-estadios.component.css']
})
export class CrudEstadiosComponent implements OnInit {
  estadioNuevo: Estadio = new Estadio()
  estadios: Estadio[] = []
  indice: number
  estadioSeleccionado: Estadio = new Estadio()

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('crudEstadio') != null) {
      this.estadios = JSON.parse(localStorage.getItem('crudEstadio'))
      this.indice = this.estadios[this.estadios.length - 1].id + 1
    } else {
      this.indice = 0
    }
  }

  insertarEstadio(): void {
    this.estadioNuevo.id = this.indice
    this.indice++
    this.estadios.push(this.estadioNuevo)
    this.estadioNuevo = new Estadio()
    localStorage.setItem('crudEstadio', JSON.stringify(this.estadios))
  }

  editarEstadio(estadio: Estadio): void {
    for (let i in this.estadios) {
      if (this.estadios[i].id == estadio.id) {
        this.estadios[i] = estadio
        this.estadioSeleccionado = new Estadio()
        localStorage.setItem('crudEstadio', JSON.stringify(this.estadios))
      }
    }
  }
  borrarEstadio(estadio: Estadio): void {
    for (let i in this.estadios) {
      if (this.estadios[i].id == estadio.id) {
        this.estadios.splice(parseInt(i),1);
        this.estadioSeleccionado = new Estadio()
        localStorage.setItem('crudEstadio', JSON.stringify(this.estadios))
      }
    }
  }

}
