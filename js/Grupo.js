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
    let guardaNomeGrupo = document.getElementById("nomeGrupo").value;
    localStorage.setItem("TituloGrupo", guardaNomeGrupo);
    let guardaMensagem = document.getElementById("fundoTexto").value;
    localStorage.setItem("Mensagem", guardaMensagem);

    if (guardaNomeGrupo == "") {
        alert("Tem que adicionar um nome ao grupo!!")
    } else {
        window.location.href = "GrupoCriado.html";
    }
}