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
    TuberiasComponent
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
