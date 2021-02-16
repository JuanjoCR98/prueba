import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';
import { Validators, FormBuilder } from '@angular/forms';
import { telefonoValido, dniValido } from 'src/app/validaciones/validaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: User = {}
  mostrarEditar: boolean = false;
  mostrarEliminar: boolean = false;
  inputBorrar: string = ""

  formPerfil = this.fb.group({
    nombre: [""],
    apellidos: [""],
    password: ["", [Validators.required, Validators.minLength(4)]],
    password2: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    telefono: [undefined, [telefonoValido()]]
  })
  formImagen = this.fb.group({
    imagen: ["", Validators.required]
  })
  constructor(private fb: FormBuilder, private servicioUsuario: UserService, private irHacia: Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
  }

  cargarPerfil(): void {
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
      },
      error => console.log(error)
    )
  }

  editarPerfil(): void {
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false
      },
      error => console.log(error)
    )
  }

  borrarPerfil(): void {
    this.servicioUsuario.borrarPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logOut()
        this.irHacia.navigate(["/login"])
      },
      error => console.log(error)
    )
  }

  subirImagen(): void {
    const formData = new FormData()
    formData.append("imagen", this.formImagen.get("imagen").value)
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

  cambiaImagen(evento): void {
    if (evento.target.files) {
      this.formImagen.get("imagen").setValue(evento.target.files[0])
    }
  }

}
