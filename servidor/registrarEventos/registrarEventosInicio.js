import { adicionarDocumento, encontrarDocumento, obterDocumentos } from "../db/documentosDb.js"

function registrarEventosInicio(socket, io) {
    socket.on("obter-documentos", async (devolverDocumentos) => {
        const documentos = await obterDocumentos()

        devolverDocumentos(documentos)
    })

    socket.on("adicionar-documento", async (nome) => {
        const documentoExiste = (await encontrarDocumento(nome)) !== null
        if (documentoExiste) {
            socket.emit("documento-existente", nome)
        } else {
            const resultado = await adicionarDocumento(nome)
            if (resultado.acknowledged) {
                io.emit("adicionar-documento-interface", nome)
            }
        }
    })
}

export default registrarEventosInicio