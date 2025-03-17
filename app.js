// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        if (nombre !== "" && !amigos.includes(nombre)) {
            amigos.push(nombre);
            actualizarLista();
            inputAmigo.value = "";
        }
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo, index) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length < 2) {
            resultado.innerHTML = "Agrega al menos dos nombres para sortear.";
            return;
        }

        let mezclados = [...amigos];
        mezclados.sort(() => Math.random() - 0.5);
        let sorteados = {};

        for (let i = 0; i < mezclados.length; i++) {
            let siguiente = (i + 1) % mezclados.length;
            sorteados[mezclados[i]] = mezclados[siguiente];
        }

        mostrarResultados(sorteados);
    };

    function mostrarResultados(sorteados) {
        resultado.innerHTML = "";
        for (let amigo in sorteados) {
            const li = document.createElement("li");
            li.textContent = `${amigo} → ${sorteados[amigo]}`;
            resultado.appendChild(li);
        }
    }
});