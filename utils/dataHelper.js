const { addBusinessDays } = require('date-fns');

function getFutureDate(days) {
    return addBusinessDays(new Date(), days).toISOString().split('T')[0];
}

function generarDireccionAleatoria() {
    const nombresCalles = ['Calle A', 'Calle B', 'Calle C', 'Calle D', 'Calle E'];
    const numeros = ['10', '20', '30', '40', '50'];
    const pisos = ['1', '2', '3', '4', '5'];
    const puertas = ['A', 'B', 'C', 'D', 'E'];

    const calleAleatoria = nombresCalles[Math.floor(Math.random() * nombresCalles.length)];
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
    const pisoAleatorio = pisos[Math.floor(Math.random() * pisos.length)];
    const puertaAleatoria = puertas[Math.floor(Math.random() * puertas.length)];

    return `${calleAleatoria} # ${numeroAleatorio} Piso ${pisoAleatorio} Puerta ${puertaAleatoria}`;
}

module.exports = {
    getFutureDate,
    generarDireccionAleatoria
};
