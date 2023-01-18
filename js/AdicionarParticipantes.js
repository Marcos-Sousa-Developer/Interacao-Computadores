/* Grupo: 01, Número: 57155, Nome: Gabriel Fonseca */
/* Grupo: 01, Número: 55852, Nome: Marcos Leitão */
/* Grupo: 01, Número: 56909, Nome: Miguel Fernandes */
/* Grupo: 01, Número: 56, Nome: Xavier Santos */

"use strict";

//Botões associados aos formulário.
const BOTAO_CHEGADOS = "btnChegados";
const BOTAO_ADICIONAR = "btnAdicionar";
const BOTAO_ADICIONAREMAIL = "btnAdicionarEmail";

window.addEventListener("load", principal);

function principal() {
    defineEventHandlersParaElementosHTML();
}

function defineEventHandlersParaElementosHTML() {
    document.getElementById(BOTAO_CHEGADOS).addEventListener("click", abrirChegados);
    document.getElementById(BOTAO_ADICIONAR).addEventListener("click", adicionarContactos);
    document.getElementById(BOTAO_ADICIONAREMAIL).addEventListener("click", adicionarContactosEmail);
}

function abrirChegados() {
    document.getElementById("listaContactos").style.display = "none";
    document.getElementById("amigosChegados").style.display = "block";
}

function abrirListaContactos() {
    document.getElementById("listaContactos").style.display = "block";
    document.getElementById("amigosChegados").style.display = "none";
}

let listaContactos = localStorage.getItem("ContactosGrupo") || '[]';
listaContactos = JSON.parse(listaContactos);

function adicionarContactos() {
    let tamanho = document.getElementsByClassName("contactos").length;
    let nome = document.getElementsByClassName("contactos");

    for (let i = 0; i < tamanho; i++) {
        if (nome[i].checked) {
            listaContactos.push(nome[i].name);
        }
    }
    localStorage.setItem("ContactosGrupo", listaContactos);

    if (listaContactos.length == 0) {
        alert("Tem que adicionar pelo menos um contacto válido.")
    } else {
        window.location.href = "Grupo.html";
    }
}

function adicionarContactosEmail() {
    let adicionarEmail = document.getElementById("contactSearch").value;

    if (adicionarEmail != "" && adicionarEmail.includes("@")) {
        listaContactos.push(adicionarEmail);
        localStorage.setItem("ContactosGrupo", listaContactos);
        alert("O email foi adicionado corretamente.");
        document.getElementById("contactSearch").value = "";
    } else {
        alert("Certifique-se que o email está bem escrito.")
    }
}