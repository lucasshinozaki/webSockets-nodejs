import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-document.js"

const paramentros = new URLSearchParams(window.location.search)
const nomeDocumento = paramentros.get("nome")

const textoEditor = document.getElementById("editor-texto")
const tituloDocumento = document.getElementById("titulo-documento")
const botaoExcluir = document.getElementById("excluir-documento")

tituloDocumento.textContent = nomeDocumento || "Documento sem titulo"

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textoEditor.value, 
        nomeDocumento
    })
})

function atualizaTextoEditor(texto) {
    textoEditor.value = texto
}

botaoExcluir.addEventListener("click" ,()=> {
    emitirExcluirDocumento(nomeDocumento)
})

function alertarERedirecionar(nome) {
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} excluido`)
        window.location.href = "/"   
    }
}

export {atualizaTextoEditor, alertarERedirecionar}