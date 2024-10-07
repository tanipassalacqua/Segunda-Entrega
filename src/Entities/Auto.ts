import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private _numeroPuertas: number;



	constructor(marca: string, modelo: string, velocidadMaxima: number, numeroPuertas: number) {
        super(marca, modelo, velocidadMaxima);
		this._numeroPuertas = numeroPuertas;
	}

    acelerar(velocidad: number): void {
        console.log(`El auto ${this.marca} ${this.modelo} está acelerando a ${velocidad}.`);
    }

    frenar ():void {
        console.log(`El auto ${this.marca} ${this.modelo} frenó.`);
    }
}
