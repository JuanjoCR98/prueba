import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/servicios/mensaje.service';
import { Mensaje } from 'src/app/clases/mensaje';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listarmensajes',
  templateUrl: './listarmensajes.component.html',
  styleUrls: ['./listarmensajes.component.css']
})
export class ListarmensajesComponent implements OnInit {
  mensajes: Mensaje[]=[]
  mensajeSeleccionado: Mensaje = new Mensaje

  formEditar: FormGroup = new FormGroup({
    id: new FormControl(),
    id_Remitente: new FormControl(''),
    id_Destinatario: new FormControl(''),
    mensaje: new FormControl('')
  })
  
  constructor(private servicioMensaje:MensajeService) { }

  ngOnInit(): void {
    this.obtenerMensajes()
  }

  obtenerMensajes(): void{
    this.servicioMensaje.mostrarMensajes().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajes = respuesta
      },
      error => console.log(error)
    )
  }

  editarMensaje(): void{
    this.servicioMensaje.editarMensaje(this.mensajeSeleccionado).subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajeSeleccionado = new Mensaje
        this.obtenerMensajes()
      },
      error =>{console.log(error)}
    )
  }
}
