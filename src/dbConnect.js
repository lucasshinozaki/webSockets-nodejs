import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const cliente = new MongoClient(process.env.DB_CONNECT)

let documentoColecao

try {
    await cliente.connect()
    const db = cliente.db("websockets")
    documentoColecao = db.collection('documentos')
    console.log("Conectado ao bd")
} catch(erro) {
    console.log(erro)
}

export {documentoColecao}