/*import {puntuacion, pedirCarta, generarCarta, actualizarPuntos, ajustarCarta, valorCarta} from "./motor"
import {obtenerUrlCarta, pintarUrlCarta, muestraPuntuacion, comprobarPartida, gameOver, nuevaPartida} from "./UI"*/
export type EstadoPartida = "EnProgreso" | "Gana" | "Pierde" | "NoInciado"; // Type 

interface Partida {
    estadoPartida : EstadoPartida;
    valorCarta : number;
    puntuacion : number;
}

export const partida : Partida = {
    estadoPartida : "NoInciado",
    valorCarta : 0,
    puntuacion : 0
};