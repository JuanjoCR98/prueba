import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nombre: String;
  apellidos: String;

  constructor(private irHacia:Router) { }

  ngOnInit(): void {
  }

  saludarA(nom,apll): void {
    this.irHacia.navigate(['/saludo/'+nom+'/'+apll]);
  }

}
