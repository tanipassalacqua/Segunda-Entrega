import { Vehiculo } from "./Vehiculo.js";
export class Auto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, numeroPuertas) {
        super(marca, modelo, velocidadMaxima);
        this._numeroPuertas = numeroPuertas;
    }
    acelerar(velocidad) {
        console.log(`El auto ${this.marca} ${this.modelo} está acelerando a ${velocidad}.`);
    }
    frenar() {
        console.log(`El auto ${this.marca} ${this.modelo} frenó.`);
    }
}
