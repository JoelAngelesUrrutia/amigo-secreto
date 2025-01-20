function agregarAmigo() {
    const amigo = document.getElementById('amigo');

    if (amigo.value.trim() === "") {
        alert("¡Ingresa un nombre válido!");
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');

    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigo.value;

    listaAmigos.appendChild(nuevoAmigo);

    amigo.value = "";
}
