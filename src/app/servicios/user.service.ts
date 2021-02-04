import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, accesoUsuario } from '../clases/user';
import { Observable } from 'rxjs';

const url="http://localhost:3000/user"

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
    return this.http.post(url+"login",usuario)
  }
}