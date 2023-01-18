/* Grupo: 01, Número: 57155, Nome: Gabriel Fonseca */
/* Grupo: 01, Número: 55852, Nome: Marcos Leitão */
/* Grupo: 01, Número: 56909, Nome: Miguel Fernandes */
/* Grupo: 01, Número: 56, Nome: Xavier Santos */

"use strict";

const BOTAO_ENVIAR = "btnMensagem";
const BOTAO_CLIP = "btnClip";
const BOTAO_CONTACTOS = "btnContactos";
const BOTAO_DOCUMENTOS = "btnDocumentos";

window.addEventListener("load", principal);

function principal() {
    buscarDados();
    defineEventHandlersParaElementosHTML();
}

function defineEventHandlersParaElementosHTML() {
    document.getElementById(BOTAO_ENVIAR).addEventListener("click", mandaMensagem);
    document.getElementById(BOTAO_CONTACTOS).addEventListener("click", contactos);
    document.getElementById(BOTAO_CLIP).addEventListener("click", ficheiros);
    document.getElementById(BOTAO_DOCUMENTOS).addEventListener("click", documentos);
}

function buscarDados() {
    document.getElementById("reuniaoCriada").innerHTML = localStorage.getItem("TituloReuniao");

    for (let i = 0; i < 10; i++) {
        document.getElementById("modalContent1").innerHTML = localStorage.getItem("ContactosReuniao");
    }
}

function mandaMensagem() {
    let input = document.getElementById("mensagemTexto").value;

    if (input == "") {

    } else {
        let element = document.createElement("div");
        element.classList.add("msg-container", "msg-self");
        let element2 = document.createElement("div");
        element2.classList.add("msg-box");
        let element3 = document.createElement("p");
        element.appendChild(element2);
        element2.appendChild(element3);
        element3.appendChild(document.createTextNode(input));
        document.getElementById("chatBox").appendChild(element);

        document.getElementById("mensagemTexto").value = "";
    }
}

function mandaFicheiro() {
    let nomeFicheiro = "Trabalho_2021.pdf";
    let element = document.createElement("div");
    element.classList.add("msg-container", "msg-self");
    let element2 = document.createElement("div");
    element2.classList.add("msg-box");
    let element3 = document.createElement("a");
    element3.setAttribute("href", "files/Trabalho_2021.pdf");
    element.appendChild(element2);
    element2.appendChild(element3);
    element3.appendChild(document.createTextNode(nomeFicheiro));
    document.getElementById("chatBox").appendChild(element);

    fecharModal3();
}

function contactos() {
    document.getElementById("modal1").style.display = "block";
}

function ficheiros() {
    document.getElementById("modal2").style.display = "block";
}

function documentos() {
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal3").style.display = "block";
}

function fecharModal2() {
    document.getElementById("modal2").style.display = "none";
}

function fecharModal3() {
    document.getElementById("modal3").style.display = "none";
}

function voltarModal2() {
    document.getElementById("modal3").style.display = "none";
    document.getElementById("modal2").style.display = "block";
}

function microfone() {
    if (document.getElementById("btnMicrofone").style.backgroundColor == "red") {
        document.getElementById("btnMicrofone").style.backgroundColor = "#333";
    } else {
        document.getElementById("btnMicrofone").style.backgroundColor = "red";
    }
}

function videoSemCamera() {
    // if (document.getElementById("imgClickAndChange").src == "images/admin.jpg") {
    //     document.getElementById("imgClickAndChange").src = "images/admin.jpg";
    //     document.getElementById("btnVideo").style.backgroundColor = "#333";
    // } else {
    // document.getElementById("imgClickAndChange").src = "images/Admin.png";
    //     document.getElementById("btnVideo").style.backgroundColor = "red";
    // }
    document.getElementById("imgClickAndChange").src = "images/Admin.png";
    document.getElementById("btnVideoComCamera").style.display = "block";
    document.getElementById("btnVideoSemCamera").style.display = "none";
}

function videoComCamera() {
    document.getElementById("imgClickAndChange").src = "images/admin.jpg";
    document.getElementById("btnVideoComCamera").style.display = "none";
    document.getElementById("btnVideoSemCamera").style.display = "block";
}

function partilharEcra() {
    if (document.getElementsByTagName("body")[0].style.border == "thick solid red") {
        document.getElementsByTagName("body")[0].style.border = "none"
        document.getElementById("btnPartilhar").style.backgroundColor = "red";
    } else {
        document.getElementsByTagName("body")[0].style.border = "thick solid red"
        document.getElementsByTagName("body")[0].style.position = "absolute";
        document.getElementById("btnPartilhar").style.backgroundColor = "#333";
    }
}