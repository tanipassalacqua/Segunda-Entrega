import { Vehiculo } from "./Vehiculo.js";
export class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, tipoManubrio) {
        super(marca, modelo, velocidadMaxima);
        this._tipoManubrio = tipoManubrio;
    }
    acelerar(velocidad) {
        console.log(`La moto ${this.marca} ${this.modelo} está acelerando a ${velocidad}.`);
    }
    frenar() {
        console.log(`La moto ${this.marca} ${this.modelo} frenó.`);
    }
}
