let i = 0; // inicializamos la variable i en 0


let mostrar = document.getElementById("contador");
let boton = document.getElementById("btncontar");

boton.addEventListener("click", function(){
    i++; // incrementamos i en 1
    mostrar.innerHTML = i; // actualizamos el contenido del elemento con id "contador"
});

