const ancho = 400;
const alto = 400;
var cantClicks = 0;
var jugando = true;

var getNumeroAleatorio = size => {
    return Math.random() * size;
}

var getDistanciaDelTesoro = (ubicacionJugador, ubicacionTesoro) => {
    let posicionX = ubicacionJugador.offsetX - ubicacionTesoro.x;
    let posicionY = ubicacionJugador.offsetY - ubicacionTesoro.y;
    return Math.sqrt((posicionX**2)+(posicionY**2)); //teorema de pitagoras
}

var getDistanciaCondicion = distancia => {
    if (distancia < 20) {      
        jugando = false; 
        return `Tesoro encontrado en ${cantClicks} clicks`
    } else if (distancia < 50){
        return "Muy Caliente"
    }else if (distancia < 100){
        return "Caliente"
    } else if (distancia < 200) {
        return "Tibio"
    } else if (distancia < 250) {
        return "Frío"
    } else if (distancia < 360) {
        return "Muy Frío"
    } else {
        return "Congelado !!"
    }
}

var objetivo = {
    x: getNumeroAleatorio(ancho),
    y: getNumeroAleatorio(alto)
}

console.log(objetivo);

var mapa = document.getElementById('mapa');
mapa.addEventListener('click', function (evento) {
    cantClicks++;
    let distancia = getDistanciaDelTesoro(evento, objetivo);
    let condicion = getDistanciaCondicion(distancia);
    document.getElementById('distancia').innerHTML = condicion;
    if (!jugando){
        alert(condicion);
        location.reload();
    }
} )