import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule, LOCALE_ID } from '@angular/core';
import "@angular/common/locales/global/es";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarloteriaComponent } from './componentes/generarloteria/generarloteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SaludoComponent } from './componentes/saludo/saludo.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { NumerosPipe } from './pipes/numeros.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudEstadiosComponent } from './componentes/crud-estadios/crud-estadios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ListarmensajesComponent } from './componentes/listarmensajes/listarmensajes.component';
import { ListarmensajesrecibidosComponent } from './componentes/listarmensajesrecibidos/listarmensajesrecibidos.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarloteriaComponent,
    MultiplicarComponent,
    CalculadoraComponent,
    SaludoComponent,
    TuberiasComponent,
    NumerosPipe,
    DniPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    CrudEstadiosComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    PerfilComponent,
    RegisterComponent,
    UsuariosComponent,
    ListarmensajesComponent,
    ListarmensajesrecibidosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"},
  {provide:HTTP_INTERCEPTORS,useClass:EnviarTokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
