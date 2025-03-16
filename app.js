let listaAmigos = [];

//Habilitar botón cuando haya texto en el input
document.getElementById("amigo").addEventListener("input", function() {
    const boton = document.getElementById("franco");
    boton.disabled = this.value.trim() === "";
});

//Función para agregar amigos a lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
        return;
    } if (listaAmigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();

    input.value = "";
    document.getElementById("franco").disabled = true;
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(function(amigo) {
        const item = document.createElement("li");
        item.textContent= amigo;
        lista.appendChild(item);
    });
} 
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de sortear.');
        return;
    }
    const IndiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[IndiceAleatorio];
    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}