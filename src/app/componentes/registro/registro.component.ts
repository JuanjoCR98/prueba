import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellidos: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dni: new FormControl('', [Validators.required, dniValido()]),
    telefono: new FormControl(undefined, [Validators.required, telefonoValido()])
  });

  formRegister2 = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    apellidos: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', [Validators.required]],
    telefono: [undefined, Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get nombre1() {return this.formRegister.get('nombre')}
  get apellidos1() {return this.formRegister.get('apellidos')}
  get password1() {return this.formRegister.get('password')}
  get email1() {return this.formRegister.get('email')}
  get telefono1() {return this.formRegister.get('telefono')}
  get dni1() {return this.formRegister.get('dni')}

}