import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})

export class DniPipe implements PipeTransform {
  letras: string[] = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
  dni: string
  resto:number;
  letra:string

  transform(value: number, ...args: unknown[]): unknown {
    this.resto = value%23
    this.letra =this.letras[this.resto]
    return this.letra;
  }

}
