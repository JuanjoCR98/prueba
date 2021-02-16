import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private servicioUsuario: UserService) { }
  usuarios: User[]=[]
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

}
