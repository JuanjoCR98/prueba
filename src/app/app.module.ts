import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import "@angular/common/locales/global/es";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormsModule} from '@angular/forms';
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
    CrudEstadiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
