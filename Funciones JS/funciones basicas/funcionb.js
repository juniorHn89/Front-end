/*Crear una función que reciba dos números y devuelva su suma.*/
function sum(a,b) {

    return a + b

};
 
  console.log(sum(2,6));




/*Crear una función que reciba dos números y devuelva su resta.*/
function res(a,b) {
    return a - b

}
    console.log(res(6,5));

/*Crear una función que reciba dos números y devuelva su multiplicación.*/
function multiply(a,b) {
    return a * b

}
    console.log(multiply(8,4));
    


/*Crear una función que reciba un número y devuelva su doble.*/
function doble(a,b) {

    return a * b

}

    console.log(doble(5,2));
    


/*Crear una función que reciba un número de minutos y devuelva cuántas horas y minutos son.*/



function minutesToHoursAndMinutes(minutos) {
    let horas = Math.floor(minutos / 60);
    let mins = minutos % 60;
    return `${horas} horas y ${mins} minutos`;
}


console.log(minutesToHoursAndMinutes(minutos));
