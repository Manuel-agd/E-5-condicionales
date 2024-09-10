import { partida } from "./modelo"
//import { obtenerUrlCarta, pintarUrlCarta } from "./UI" // No depender de estos imports, crear nuevas funciones en motor

export let puntuacion = 0;

export const pedirCarta = (): number => {
    const carta = ajustarCarta(generarCarta());
    const puntos = valorCarta(carta);
    actualizarEstadoPartida (partida.puntuacion + puntos);
    comprobarEstadoPartida();
    return carta;
}


export const generarCarta = (): number => {
    return Math.floor(Math.random()*10) +1;
}

export const ajustarCarta = (carta:number) : number => {
    if (carta > 7) {
        return carta +2;
    }
    return carta;
} 

export const valorCarta = (carta:number): number => {
    if (carta >= 10) {
        return 0.5;
    } 
    return carta;
}


export const comprobarEstadoPartida = () =>{
    if (partida.puntuacion === 7.5) {
        partida.estadoPartida = "Gana";
    } else if (partida.puntuacion > 7.5) {
        partida.estadoPartida = "Pierde";
        return;
    } else {
        partida.estadoPartida = "EnProgreso";
    }

}

export const actualizarEstadoPartida = (nuevosPuntos : number): void => {
    partida.puntuacion = nuevosPuntos;
    //muestraPuntuacion();   
}

export const obtenerMensaje = (): string => {
    switch (true) {
      case partida.puntuacion === 7.5:
        return "¡Lo has clavado! ¡Enhorabuena!";
      case partida.puntuacion > 7.5:
        return "Game Over! Te has pasado de 7.5 puntos";
      case partida.puntuacion < 4:
        return "Has sido muy conservador";
      case partida.puntuacion === 5:
        return "Te ha entrado canguelo eh";
      case partida.puntuacion === 6 || partida.puntuacion === 7:
        return "Casi, casi...";
      default:
        return "";
    }
  };

  export const reiniciarPartida = ():void =>{
    partida.puntuacion = 0;
    partida.estadoPartida = "NoInciado"
  }
