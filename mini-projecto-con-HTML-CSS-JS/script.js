// 1. Creamos un array de frases
const frases = [
  "No te detengas hasta sentirte orgulloso.",
  "Cree en ti y todo será posible.",
  "La práctica hace al maestro.",
  "Cada día es una nueva oportunidad.",
  "Los errores son parte del aprendizaje.",
  "¡Tú puedes con esto y más!"
];

// 2. Seleccionamos los elementos del DOM
const boton = document.getElementById("boton");
const frase = document.getElementById("frase");

// 3. Añadimos el evento al botón
boton.addEventListener("click", () => {
  // Elegimos una frase aleatoria
  const indice = Math.floor(Math.random() * frases.length);
  frase.textContent = frases[indice];
});
