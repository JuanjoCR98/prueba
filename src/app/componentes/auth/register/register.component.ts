import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { telefonoValido, dniValido } from 'src/app/validaciones/validaciones';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrado: boolean = false
  temporizador: any
  formRegister = this.fb.group({
    nombre: [""],
    apellidos: [""],
    password: ["",[Validators.required,Validators.minLength(4)]],
    password2: ["",[Validators.required]],
    email: ["",[Validators.required,Validators.email]],
    telefono:[undefined,[telefonoValido()]],
    dni:["",[Validators.required,dniValido()]]
  })
  constructor(private fb:FormBuilder, private servicioUsuario:UserService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.formRegister.value.password == this.formRegister.value.password2){
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.registrado = true
          this.servicioUsuario.guardarToken(respuesta)
        if(this.temporizador == null){
          this.temporizador=setTimeout(()=>{this.registrado = false},4000);
        }  
        },
        error => console.log(error)
      )
    }else{
      alert("Las contraseñas no coinciden")
    }
  }

}
