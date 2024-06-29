import { adicionarDocumento, atualizaDocumento, encontrarDocumento, obterDocumentos } from "./documentosDb.js"
import io from "./servidor.js"

io.on("connection", (socket) => {
    socket.on("obter-documentos", async (devolverDocumentos) => {
        const documentos = await obterDocumentos()

        devolverDocumentos(documentos)
    })

    socket.on("adicionar-documento", async (nome) => {
        const resultado = await adicionarDocumento(nome)
        if (resultado.acknowledged) {
            io.emit("adicionar-documento-interface", nome)
        }
    })

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
})

