import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const cliente = new MongoClient(process.env.DB_CONNECT)

let documentosColecao
let usuariosColecao

try {
    await cliente.connect()

    const db = cliente.db("websockets")
    documentosColecao = db.collection('documentos')
    usuariosColecao = db.collection('usuarios')


    console.log("Conectado ao bd")
} catch(erro) {
    console.log(erro)
}

export {documentosColecao, usuariosColecao}