import { AbstractControl,ValidatorFn } from "@angular/forms";

export function telefonoValido(): ValidatorFn{
    return (telefono: AbstractControl):{[key:string]:any} | null => {
        const numTelefono = telefono.value;
        if(numTelefono<999999999 || numTelefono>600000000){
            return {telefono: "Teléfono inválido"}
        }else{return null}
    };
}

export function dniValido(): ValidatorFn{
    /*return (dni:AbstractControl):{[key:string]:any}| null =>{
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        const numero = dni.value.match(/\d+/g);
        let letra = dni.value.match(/[a-z]/g);
        const letra_eval = letras [numero%23];
        if(letra == null)return {dni: "falta la lettra"};
        else letra = letra.join().toUpperCase();
        if(letra_eval != letra) return {dni:"invalido"};
        else return null;
    }*/
    return null;
}