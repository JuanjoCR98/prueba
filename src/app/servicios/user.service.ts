import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, accesoUsuario } from '../clases/user';
import { Observable } from 'rxjs';

//const url="http://localhost:3000/user/"
const url="http://localhost/backendphp/user/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registrar(usuario:User): Observable<any>{
    return this.http.post(url,usuario)
  }

  guardarToken(respuesta:string){
    localStorage.setItem('tokenregistro', respuesta)
  }

  login(usuario:accesoUsuario): Observable<any>{
    return this.http.post(url+"login/",usuario)
  }

  editarPerfil(perfil:User): Observable<any>{
    return this.http.put(url,perfil)
  }

  obtenerPerfil(): Observable<any>{
    return this.http.get(url)
  }

  borrarPerfil(): Observable<any>{
    return this.http.delete(url)
  }

  subirImagen(entrada): Observable<any>{
    return this.http.post(url+'image/',entrada)
  }
  isLogged(): boolean{
    return !!localStorage.getItem("tokenregistro")
  }
  logOut(){
    localStorage.removeItem("tokenregistro")
  }

  leerToken(): string{
    return localStorage.getItem("tokenregistro")
  }
}
