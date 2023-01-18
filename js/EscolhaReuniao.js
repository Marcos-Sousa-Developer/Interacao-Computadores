/* Grupo: 01, Número: 57155, Nome: Gabriel Fonseca */
/* Grupo: 01, Número: 55852, Nome: Marcos Leitão */
/* Grupo: 01, Número: 56909, Nome: Miguel Fernandes */
/* Grupo: 01, Número: 56, Nome: Xavier Santos */

"use strict";

window.addEventListener("load", principal);

function principal() {
    buscarDados();
}

function buscarDados() {
    let nomeReuniao = localStorage.getItem("TituloReuniao");

    if (nomeReuniao == null) {

    } else {
        let element1 = document.createElement("div");
        element1.classList.add("seccaoReunioes");
        let element2 = document.createElement("p");
        element2.classList.add("nomeReuniao");
        let element3 = document.createElement("hr");
        element1.appendChild(element2);
        element2.appendChild(document.createTextNode(nomeReuniao));
        document.getElementById("listaReunioes").appendChild(element1);
        document.getElementById("listaReunioes").appendChild(element3);

        element1.addEventListener("click", function () {
            window.location.href = "ReuniaoCriada.html";
        });
    }
}