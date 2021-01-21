import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: String;
  apellidos: String;

  constructor(private rutaActiva: ActivatedRoute, private irHacia:Router) { }


  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.paramMap.get("nombre");
    this.apellidos = this.rutaActiva.snapshot.paramMap.get("apellidos");
  }

}
