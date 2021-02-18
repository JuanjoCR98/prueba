import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajeService } from 'src/app/servicios/mensaje.service';

@Component({
  selector: 'app-listarmensajesrecibidos',
  templateUrl: './listarmensajesrecibidos.component.html',
  styleUrls: ['./listarmensajesrecibidos.component.css']
})
export class ListarmensajesrecibidosComponent implements OnInit {

  mensajesRecibidos: Mensaje[]=[]
  constructor(private servicioMensaje:MensajeService) { }

  ngOnInit(): void {
    this.obtenerMensajesRecibidos()
  }

  obtenerMensajesRecibidos(): void{
    this.servicioMensaje.mostrarMensajesRecibidos().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajesRecibidos = respuesta
      },
      error => console.log(error)
    )
  }

  borrarMensaje(id:number): void{
    this.servicioMensaje.borrarMensaje(id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerMensajesRecibidos()
      },
      error => console.log(error)
    )  
  }
}
