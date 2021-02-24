export class Valida {
    dniValido(dni: any): boolean {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET"
        let numero = dni.match("/\d+/g")
        let letra = dni.match("/[a-z]/gi")
        const letra_eval = letras[numero % 23]
        if (letra == null) {
          return false
        } else {
          letra =letra.join().toString().toUpperCase()
        }
        if (letra_eval != letra.toString()) {
          return false
        }
        return true
      }
}
