import { atualizaDocumento, encontrarDocumento, excluirDocumento } from "../db/documentosDb.js"

function registrarEventosDocumento(socket, io) {
    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento)
        const documento = await encontrarDocumento(nomeDocumento)
        if (documento) {
            //socket.emit("texto_documento", documento.texto)
            devolverTexto(documento.texto)
        }
    })

    socket.on("texto_editor", async ({texto, nomeDocumento}) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto)

        if (atualizacao.modifiedCount){
            socket.to(nomeDocumento).emit('texto_editor_clientes', texto)
        }
        //socket.broadcast.emit("texto_editor_clientes", texto)
    })

    socket.on("excluir-documento", async (nome) => {
        const resultado = await excluirDocumento(nome)
        if (resultado.deletedCount) {
            io.emit("excluir-documento-sucesso", nome)
        }
    })
}

export default registrarEventosDocumento