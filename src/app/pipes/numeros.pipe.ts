import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (args[0] == "cuadrado") {
      return value * value;
    } else if (args[0] == "raiz") {
      return Math.sqrt(value)
    } else if (args[0] == "aletras") {
      switch (value) {
        case 0:
          return "Cero"
          break;
        case 1:
          return "Uno"
          break;
        case 2:
          return "Dos"
          break;
        case 3:
          return "Tres"
          break;
        case 4:
          return "Cuatro"
          break;
        case 5:
          return "Cinco"
          break;
        case 6:
          return "Seis"
          break;
        case 7:
          return "Siete"
          break;
        case 8:
          return "Ocho"
          break;
        case 9:
          return "Nueve"
          break;
      }
    }

  }

}
