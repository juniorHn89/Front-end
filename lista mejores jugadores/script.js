let estrellas =["Mesi", "Ronaldo", "Neymar", "Mbappe", "Salah","Yamal", "Lewandowski"];

let lista = document.getElementById("lista-jugadores");

estrellas.forEach(list => {
    let li = document.createElement("li");
    li.textContent = list;
    lista.appendChild(li);
});