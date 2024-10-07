import { IVehiculo } from "../Interfaces/IVehiculo";

export class Vehiculo implements IVehiculo {
    private _marca: string;
    private _modelo: string;
    private _velocidadMaxima: number;

    constructor(marca: string, modelo: string, velocidadMaxima: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidadMaxima = velocidadMaxima;
    }
    //Getters & Setters
    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get velocidadMaxima(): number {
        return this._velocidadMaxima;
    }

    public set velocidadMaxima(value: number) {
        this._velocidadMaxima = value;
    }


    acelerar(velocidad: number): void {
        console.log(`El vehículo ${this._marca} ${this._modelo} está acelerando a ${velocidad} km/h.`);
    }

   
    frenar(): void {
        console.log(`El vehículo ${this._marca} ${this._modelo} frenó.`);
    }

}
