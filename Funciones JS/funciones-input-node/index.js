const prompt = require('prompt-sync')();

function minutesToHoursAndMinutes(minutos) {
    let horas = Math.floor(minutos / 60);
    let mins = minutos % 60;
    return `${horas} horas y ${mins} minutos`;
}

const minutos = Number(prompt("Introduce la cantidad de minutos: "));
console.log(minutesToHoursAndMinutes(minutos));
