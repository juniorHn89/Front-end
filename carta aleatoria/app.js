
window.generarCarta = function () {

    const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jota", "Reina", "Rey", "As"];


    const palos = [
        { nombre: "heart", simbolo: "♥" },
        { nombre: "spade", simbolo: "♠" },
        { nombre: "club", simbolo: "♣" },
        { nombre: "diamond", simbolo: "♦" }
    ];


    const indiceValor = Math.floor(Math.random() * valores.length);
    const indicePalo = Math.floor(Math.random() * palos.length);

    const valor = valores[indiceValor];
    const palo = palos[indicePalo];


    const cartaDiv = document.getElementById("carta");

     cartaDiv.className = "card mx-auto " + palo.nombre;

    cartaDiv.innerHTML = `<div class="container text-center h-100">
  <div class="row h-100">
        <div class="col align-self-start text-start">
           <span class="${palo.nombre}">${palo.simbolo}</span>
        </div>

        <div class="col align-self-center">
            <span>${valor}</span>
        </div>

        <div class="col align-self-end">
            <span class="${palo.nombre}">${palo.simbolo}</span>
        </div>
    </div>
</div>`;
};