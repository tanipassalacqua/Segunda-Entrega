import { Auto } from "./Entities/Auto.js";
import { Moto } from "./Entities/Moto.js";
const vehiculos = [
    new Auto("Un auto", "Un modelo", 180, 4),
    new Moto("Una moto", "Un modelo", 225, "Un manubrio")
];
function llamarMetodos(vehiculos) {
    const velocidad = 60;
    const resultados = vehiculos.map(vehiculo => {
        vehiculo.acelerar(velocidad);
        vehiculo.frenar();
        return vehiculo;
    });
    console.log(resultados);
}
llamarMetodos(vehiculos);
