import { partida } from "./modelo";
import { pedirCarta , obtenerMensaje, reiniciarPartida } from "./motor";

export const arrancarApp = () => {
  const obtenerUrlCarta = (carta: number): string => {
    switch (carta) {
      case 1:
        return "src/imagenes/1.jpg";
      case 2:
        return "src/imagenes/2.jpg";
      case 3:
        return "src/imagenes/3.jpg";
      case 4:
        return "src/imagenes/4.jpg";
      case 5:
        return "src/imagenes/5.jpg";
      case 6:
        return "src/imagenes/6.jpg";
      case 7:
        return "src/imagenes/7.jpg";
      case 10:
        return "src/imagenes/10.jpg";
      case 11:
        return "src/imagenes/11.jpg";
      case 12:
        return "src/imagenes/12.jpg";
      default:
        return "src/imagenes/back.jpg";
    }
  };

  const pintarUrlCarta = (urlCarta: string): void => {
    const elementoImagen = document.getElementById("imagen");
    if (elementoImagen instanceof HTMLImageElement) {
      elementoImagen.src = urlCarta;
    }
  };

  const muestraPuntuacion = (): void => {
    const puntuacionDiv = document.getElementById("puntuacion");
    if (puntuacionDiv instanceof HTMLElement) {
      puntuacionDiv.textContent = `Puntuación: ${partida.puntuacion}`;
    }
  };

  const mostrarMensaje = (): void => {
    const mensajeDiv = document.getElementById("mensaje");
    if (mensajeDiv) {
      mensajeDiv.textContent = obtenerMensaje();
    }
  };

  const gameOver = (): void => {
    const mensajeDiv = document.getElementById("mensaje");
    const btnPedirCartas = document.getElementById("pedirCartas");
    const btnPlantarse = document.getElementById("plantarse");
    const btnNuevaPartida = document.getElementById("nuevaPartida");

    if (partida.estadoPartida === "Pierde") {
      if (mensajeDiv) {
        mensajeDiv.textContent = "Game Over! Te has pasado de 7.5 puntos";
      }
      if (btnPedirCartas instanceof HTMLButtonElement) {
        btnPedirCartas.disabled = true;
      }
      if (btnPlantarse instanceof HTMLButtonElement) {
        btnPlantarse.disabled = true;
      }
      if (btnNuevaPartida instanceof HTMLButtonElement) {
        btnNuevaPartida.style.display = "block";
      }
    }
  };
  const btnPedirCartas = document.getElementById("pedirCartas");
  const btnPlantarse = document.getElementById("plantarse");
  const btnNuevaPartida = document.getElementById("nuevaPartida");

  if(btnPedirCartas instanceof HTMLButtonElement){
    btnPedirCartas.addEventListener("click", () => {
      btnPedirCartas.disabled = false;
      const carta = pedirCarta();
      const urlCarta = obtenerUrlCarta(carta);
      pintarUrlCarta(urlCarta);
      muestraPuntuacion();
      //mostrarMensaje();
      gameOver();
  });
  };

  if(btnNuevaPartida instanceof HTMLButtonElement){
    btnNuevaPartida.addEventListener("click", () =>{
      reiniciarPartida();
      muestraPuntuacion();
      pintarUrlCarta(obtenerUrlCarta(0));
      btnNuevaPartida.style.display = "none";
      if(btnPedirCartas instanceof HTMLButtonElement) {
        btnPedirCartas.disabled = false;
      }
      if(btnPlantarse instanceof HTMLButtonElement){
        btnPlantarse.disabled = false;
      }
      gameOver();
      //mostrarMensaje();
    })
  };

  if(btnPlantarse instanceof HTMLButtonElement){
    btnPlantarse.addEventListener("click", () => {
      gameOver();
      if(btnNuevaPartida instanceof HTMLButtonElement){
        btnNuevaPartida.style.display = "block";
      }
      muestraPuntuacion();
      mostrarMensaje();
      //reiniciarPartida();
    })
  };

};
