// Alerta
alert("!Bienvenido al generador de frases motivacionales! Hazclic para obtener una frase motivacional.")

// 1. Creamos un array de frases
const frases = [
  "No te detengas hasta sentirte orgulloso.",
  "Cree en ti y todo será posible.",
  "La práctica hace al maestro.",
  "Cada día es una nueva oportunidad.",
  "Los errores son parte del aprendizaje.",
  "¡Tú puedes con esto y más!",
  "La perseverancia es la clave del éxito.",
  "El único modo de hacer un gran trabajo es amar lo que haces.",
  "La vida es un 10% lo que te sucede y un 90% cómo reaccionas ante ello.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No cuentes los días, haz que los días cuenten.",
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

