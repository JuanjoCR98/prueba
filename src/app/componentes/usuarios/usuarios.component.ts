import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajeService } from 'src/app/servicios/mensaje.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private servicioUsuario: UserService,private servicioMensaje: MensajeService, private fb:FormBuilder) { }
  usuarios: User[]=[]
  usuarioSeleccionado: User 
  formMensaje = this.fb.group({
    idDestinatario: [''],
    mensaje: ['',Validators.required]
  })
  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(): void{
    this.servicioUsuario.obtenerUsuarios().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuarios = respuesta
      },
      error => console.log(error)
    )
  }

  escribirMensaje(): void{
    this.servicioMensaje.crearMensaje(this.formMensaje.value).subscribe(
      respuesta => {
        console.log(respuesta)
      },
      error => {console.log(error)}
    )
  }

}
