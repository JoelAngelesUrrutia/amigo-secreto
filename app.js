const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    const amigo = document.getElementById('amigo');

    if (amigo.value.trim() === "") {
        alert("¡Ingresa un nombre válido!");
        return;
    }

    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigo.value;

    listaAmigos.appendChild(nuevoAmigo);

    amigo.value = "";
}

function sortearAmigo(){
    const amigos = listaAmigos.getElementsByTagName('li');

    if (amigos.length === 0) { // Validamos si la lista está vacía
        alert("La lista está vacía, agrega amigos primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
    const amigoAleatorio = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto sorteado es: " + amigoAleatorio.textContent

    listaAmigos.textContent = ""
}
