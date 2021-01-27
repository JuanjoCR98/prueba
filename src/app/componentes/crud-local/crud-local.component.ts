import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {
  notaNueva: Nota = new Nota()
  notas: Nota[] = []
  indice: number
  notaSeleccionada: Nota = new Nota()

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('crudLocal') != null) {
      this.notas = JSON.parse(localStorage.getItem('crudLocal'))
      this.indice = this.notas[this.notas.length - 1].id + 1
    } else {
      this.indice = 0
    }
  }

  insertarNota(): void {
    this.notaNueva.id = this.indice
    this.indice++
    this.notas.push(this.notaNueva)
    this.notaNueva = new Nota()
    localStorage.setItem('crudLocal', JSON.stringify(this.notas))
  }

  editarNota(nota: Nota): void {
    for (let i in this.notas) {
      if (this.notas[i].id == nota.id) {
        this.notas[i] = nota
        this.notaSeleccionada = new Nota()
        localStorage.setItem('crudLocal', JSON.stringify(this.notas))
      }
    }
  }
  borrarNota(nota: Nota): void {
    for (let i in this.notas) {
      if (this.notas[i].id == nota.id) {
        this.notas.splice(parseInt(i),1);
        this.notaSeleccionada = new Nota()
        localStorage.setItem('crudLocal', JSON.stringify(this.notas))
      }
    }
  }
}
