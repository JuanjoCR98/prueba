import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SaludoComponent } from './componentes/saludo/saludo.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudEstadiosComponent } from './componentes/crud-estadios/crud-estadios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "saludo/:nombre/:apellidos", component:SaludoComponent},
  {path: "tuberias", component:TuberiasComponent},
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crudLocal", component:CrudLocalComponent},
  {path: "crud", component:CrudComponent},
  {path: "estadios", component:CrudEstadiosComponent},
  {path: "registro", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent},

  {path: "**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
