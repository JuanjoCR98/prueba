import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SaludoComponent } from './componentes/saludo/saludo.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "saludo/:nombre/:apellidos", component:SaludoComponent},
  {path: "tuberias", component:TuberiasComponent},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
