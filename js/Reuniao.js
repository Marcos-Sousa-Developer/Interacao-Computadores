/* Grupo: 01, Número: 57155, Nome: Gabriel Fonseca */
/* Grupo: 01, Número: 55852, Nome: Marcos Leitão */
/* Grupo: 01, Número: 56909, Nome: Miguel Fernandes */
/* Grupo: 01, Número: 56, Nome: Xavier Santos */

"use strict";

const BOTAO_CRIAR = 'btnCriar';

window.addEventListener("load", principal);

function principal() {
    defineEventHandlersParaElementosHTML();
}

function defineEventHandlersParaElementosHTML() {
    document.getElementById(BOTAO_CRIAR).addEventListener('click', passo);
}

function passo() {
    let guardaNomeReuniao = document.getElementById("nomeReuniao").value;
    localStorage.setItem("TituloReuniao", guardaNomeReuniao);

    if (guardaNomeReuniao == "") {
        alert("Tem que adicionar um nome à reunião!!")
    } else {
        window.location.href = "ReuniaoCriada.html";
    }
}