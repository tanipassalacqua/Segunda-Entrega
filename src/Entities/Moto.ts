import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private _tipoManubrio: string;



	constructor(marca: string, modelo: string, velocidadMaxima: number, tipoManubrio: string) {
        super(marca, modelo, velocidadMaxima);
		this._tipoManubrio = tipoManubrio;
	}

    acelerar(velocidad: number): void {
        console.log(`La moto ${this.marca} ${this.modelo} está acelerando a ${velocidad}.`);
    }

    frenar ():void {
        console.log(`La moto ${this.marca} ${this.modelo} frenó.`);
    }
}
