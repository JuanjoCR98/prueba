import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { telefonoValido, dniValido } from 'src/app/validaciones/validaciones';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import { Valida } from 'src/app/clases/valida';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  valida: Valida = new Valida
  dni: any
  pass: string
  mensaje: string
  registrado: boolean = false
  temporizador: any
  formRegister = this.fb.group({
    nombre: [""],
    apellidos: [""],
    password: ["", [Validators.required]],
    password2: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    telefono: [undefined],
    dni: ["", [Validators.required]]
  })
  constructor(private fb: FormBuilder, private servicioUsuario: UserService, private irHacia: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.dni = this.formRegister.value.dni;
    this.pass = this.formRegister.value.password
    if (this.formRegister.value.password != this.formRegister.value.password2) {
      this.mensaje = "No coinciden las contraseñas"
    }else if(this.pass.length<4){
      this.mensaje = "La contraseña debe de tener al menos 4 caracteres"
    }
     else if (!this.valida.dniValido(this.dni)) {
      this.mensaje = "DNI no válido"
    } else if (this.formRegister.value.telefono > 999999999 || this.formRegister.value.telefono < 600000000) {
      this.mensaje = "Teléfono no válido"
    } else {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.registrado = true
          this.mensaje = null
          this.servicioUsuario.guardarToken(respuesta)
          if (this.temporizador == null) {
            this.temporizador = setTimeout(() => {
              this.registrado = false
              this.irHacia.navigate(["/perfil"])
            }, 2000);

          }
        },
        error => {
          this.mensaje = error.error.error
        }
      )

    }
  }
  
}
