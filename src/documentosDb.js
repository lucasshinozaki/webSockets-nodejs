import { documentosColecao } from "./dbConnect.js"

function obterDocumentos() {
    const documentos = documentosColecao.find().toArray()
    return documentos
}

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    })

    return documento
}

function atualizaDocumento(nome, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome, 
    }, {
        $set: {
            texto
        }
    })
    return atualizacao
}

function adicionarDocumento(nome) {
    const resultado = documentosColecao.insertOne({
        nome: nome,
        texto: ""
    })
    return resultado
}
export {encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento}