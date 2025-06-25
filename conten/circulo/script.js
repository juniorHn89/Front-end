const boton = document.getElementById('boton');
const figura = document.getElementById('figura');

boton.addEventListener('click', () => {
  figura.classList.toggle('redondo');
});
