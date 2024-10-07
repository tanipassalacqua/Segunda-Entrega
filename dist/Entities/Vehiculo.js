export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidadMaxima = velocidadMaxima;
    }
    //Getters & Setters
    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }
    get marca() {
        return this._marca;
    }
    set marca(value) {
        this._marca = value;
    }
    get velocidadMaxima() {
        return this._velocidadMaxima;
    }
    set velocidadMaxima(value) {
        this._velocidadMaxima = value;
    }
    acelerar(velocidad) {
        console.log(`El vehículo ${this._marca} ${this._modelo} está acelerando a ${velocidad} km/h.`);
    }
    frenar() {
        console.log(`El vehículo ${this._marca} ${this._modelo} frenó.`);
    }
}
