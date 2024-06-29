import { inserirLinkDocumento } from "./index.js"

const socket = io()


socket.emit("obter-documentos", (documentos) => {
    documentos.forEach((documento) => {
        inserirLinkDocumento(documento.nome)
    })
    
})

function emitirAdicionarDocumento(nome) {
    socket.emit("adicionar-documento", nome)
}

socket.on("adicionar-documento-interface", (nome) => {
    inserirLinkDocumento(nome)
})

socket.on("documento-existente", (nome) => {
    alert(`O documento ${nome} já existe`)
})

export { emitirAdicionarDocumento }