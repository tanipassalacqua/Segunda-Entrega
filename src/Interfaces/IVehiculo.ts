export interface IVehiculo {
  marca: string;
  modelo: string;
  velocidadMaxima: number;

  acelerar(velocidad: number): void;
}
