import { emitirTextoEditor, selecionarDocumento } from "./socket-front-document.js"

const paramentros = new URLSearchParams(window.location.search)
const nomeDocumento = paramentros.get("nome")

const textoEditor = document.getElementById("editor-texto")
const tituloDocumento = document.getElementById("titulo-documento")

tituloDocumento.textContent = nomeDocumento || "Documento sem titulo"

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value)
})

function atualizaTextoEditor(texto) {
    textoEditor.value = texto
}

export {atualizaTextoEditor}