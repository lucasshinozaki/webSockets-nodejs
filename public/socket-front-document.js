import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto)
    })
}

function emitirTextoEditor(dados){
    socket.emit("texto_editor", dados)
}

// socket.on("texto_documento", (texto) => {
//     atualizaTextoEditor(texto)
// })

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto)
})

function emitirExcluirDocumento(nome) {
    socket.emit("excluir-documento", nome)
}

socket.on("excluir-documento-sucesso", (nome) => {
    alertarERedirecionar(nome)
})

export { emitirTextoEditor, selecionarDocumento , emitirExcluirDocumento}