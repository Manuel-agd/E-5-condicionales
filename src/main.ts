let puntuacion = 0;

const generarCarta = (): number => {
    return Math.floor(Math.random()*10) +1;
}

const ajustarCarta = (carta:number) : number => {
    if (carta > 7) {
        return carta +2;
    }
    return carta;
} 

const obtenerUrlCarta = (carta : number): string => {

    switch(carta) {
        case 1: return "src/imagenes/1.jpg";
        case 2: return "src/imagenes/2.jpg";
        case 3: return "src/imagenes/3.jpg";
        case 4: return "src/imagenes/4.jpg";
        case 5: return "src/imagenes/5.jpg";
        case 6: return "src/imagenes/6.jpg";
        case 7: return "src/imagenes/7.jpg";
        case 10: return "src/imagenes/10.jpg";
        case 11: return "src/imagenes/11.jpg";
        case 12: return "src/imagenes/12.jpg";
        default: return "src/imagenes/back.jpg";
    }
}

const pintarUrlCarta = (urlCarta: string): void => {
    const elementoImagen = document.getElementById("imagen");
    if (elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = urlCarta;
    }
}

const valorCarta = (carta:number): number => {
    if (carta >= 10) {
        return 0.5;
    } 
    return carta;
}

const actualizarPuntos = (nuevosPuntos : number): void => {
    puntuacion = nuevosPuntos;
    muestraPuntuacion();
}

const muestraPuntuacion = (): void => {
    const puntuacionDiv = document.getElementById("puntuacion");
    if (puntuacionDiv instanceof HTMLElement) {
        puntuacionDiv.textContent = `Puntuación: ${puntuacion}`; 
    }
}

const comprobarPartida = (): void => {
    const mensajeDiv = document.getElementById("mensaje");
    if(!mensajeDiv) return;

    if (puntuacion === 7.5) {
        mensajeDiv.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    } else if (puntuacion > 7.5) {
        mensajeDiv.textContent = "Game Over! Te has pasado de 7.5 puntos";
    } else if (puntuacion < 4) {
        mensajeDiv.textContent = "Has sido muy conservador";
    } else if (puntuacion === 5) {
        mensajeDiv.textContent = "Te ha entrado canguelo eh";
    } else if (puntuacion === 6 || puntuacion === 7) {
        mensajeDiv.textContent = "Casi, casi...";
    }
}

const pedirCarta = () => {
    const carta = ajustarCarta(generarCarta());
    const urlCarta = obtenerUrlCarta(carta);
    pintarUrlCarta(urlCarta);
    const puntos = valorCarta(carta);
    actualizarPuntos (puntuacion + puntos);
    /*comprobarPartida();*/
    gameOver();
}

const gameOver = (): void => {
    const mensajeDiv = document.getElementById("mensaje");
    const btnPedirCartas = document.getElementById("pedirCartas");
    const btnPlantarse = document.getElementById("plantarse");
    const btnNuevaPartida = document.getElementById("nuevaPartida");
    if(puntuacion > 7.5) {
        if(mensajeDiv) {
            mensajeDiv.textContent = "Game Over! Te has pasado de 7.5 puntos";
        } 
        if (btnPedirCartas instanceof HTMLButtonElement){
            btnPedirCartas.disabled = true;  
        }
        if (btnPlantarse instanceof HTMLButtonElement) {
            btnPlantarse.disabled = true;
        }if (btnNuevaPartida instanceof HTMLButtonElement){
            btnNuevaPartida.style.display = 'block';
        }
        
    }
}

const nuevaPartida = (): void => {
    puntuacion = 0;
    muestraPuntuacion();
    const mensajeDiv = document.getElementById("mensaje");
    const btnPedirCartas = document.getElementById("pedirCartas");
    const btnPlantarse = document.getElementById("plantarse");
    const btnNuevaPartida = document.getElementById("nuevaPartida");
    const cartaImg = document.getElementById("imagen");

    if (mensajeDiv) {
        mensajeDiv.textContent = "";
    }
    if (btnPedirCartas instanceof HTMLButtonElement) {
        btnPedirCartas.disabled = false;
    }
    if (btnPlantarse instanceof HTMLButtonElement) {
        btnPlantarse.disabled = false;
    }
    if (btnNuevaPartida instanceof HTMLButtonElement) {
        btnNuevaPartida.style.display = 'none';
    }
    if (cartaImg && cartaImg instanceof HTMLImageElement) {
        cartaImg.src = "src/imagenes/back.jpg";
    }
}

const btnNuevaPartida = document.getElementById("nuevaPartida");
if (btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", nuevaPartida);
}

const btnPedirCartas = document.getElementById("pedirCartas");
if(btnPedirCartas instanceof HTMLButtonElement) {
    btnPedirCartas.addEventListener("click", pedirCarta);
}

const btnPlantarse = document.getElementById("plantarse");
if (btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", () => {
        const mensajeDiv = document.getElementById("mensaje");
        if(mensajeDiv) { 
            if (puntuacion < 4) {
                mensajeDiv.textContent = "Has sido muy conservador";
            }
            else if (puntuacion == 5){
                mensajeDiv.textContent = "Te ha entrado canguelo eh";
            }
            else if (puntuacion == 6 || puntuacion == 7){
                mensajeDiv.textContent = "Casi, casi..."
            }
            else if (puntuacion == 7.5){
                mensajeDiv.textContent = "¡Lo has clavado! ¡Enhorabuena!";
            }
        }
        if(btnPedirCartas instanceof HTMLButtonElement){
        btnPedirCartas.disabled = true;
        }
        if(btnPlantarse instanceof HTMLButtonElement){
            btnPlantarse.disabled = true;
        }
        const btnNuevaPartida = document.getElementById("nuevaPartida")
        if (btnNuevaPartida instanceof HTMLButtonElement){
            btnNuevaPartida.style.display = `block`;
        }
        comprobarPartida();
    });  
}




