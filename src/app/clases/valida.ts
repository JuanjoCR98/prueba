export class Valida {
    dniValido(dni: any): boolean {
        console.log(dni)
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET"
        let numero = dni.match(/\d+/g)
        let letra = dni.match(/[a-z]/gi)
        console.log(letra)
        const letra_eval = letras[numero % 23]
        if (letra == null) {
          console.log("No tiene letra")
          return false
        } else {
          letra =letra.join().toUpperCase()
        }
        if (letra_eval != letra) {
          console.log("Dni no valido")
          return false
        }
        console.log("Es valido")
        return true
      }
}
