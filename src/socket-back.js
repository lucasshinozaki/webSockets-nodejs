import { documentosColecao } from "./dbConnect.js"
import io from "./servidor.js"

io.on("connection", (socket) => {
    console.log('Um cliente se conectou! ID', socket.id)

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento)
        const documento = await encontrarDocumento(nomeDocumento)

        console.log(documento)
        
        if (documento) {
            //socket.emit("texto_documento", documento.texto)
            devolverTexto(documento.texto)
        }
    })

    socket.on("texto_editor", ({texto, nomeDocumento}) => {
        const documento = encontrarDocumento(nomeDocumento)

        if (documento) {
            documento.texto = texto
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto)
        }

        //socket.broadcast.emit("texto_editor_clientes", texto)
    })
})

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    })

    return documento
}
