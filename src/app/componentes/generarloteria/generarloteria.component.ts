import { I18nPluralPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarloteria',
  templateUrl: './generarloteria.component.html',
  styleUrls: ['./generarloteria.component.css']
})
export class GenerarloteriaComponent implements OnInit {

  digito: number;
  imagendigito: string;

  constructor() { }

  ngOnInit(): void {
  }

  obten_numero_loteria(): void {
    this.digito = Math.floor(Math.random() * (10));
  }

}
