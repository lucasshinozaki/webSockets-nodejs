import { inserirLinkDocumento, removerLinkDocumento } from "./index.js"
import { obterCookie } from "./utils/cookies.js"

const socket = io({
    auth: {
        token: obterCookie("tokenJwt")
    }
})

socket.on("connect_error", (erro) => {
    alert(erro)
    window.location.href = "/login/index.html"
})

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

socket.on("excluir-documento-sucesso", (nome) => {
    removerLinkDocumento(nome)
})

export { emitirAdicionarDocumento }