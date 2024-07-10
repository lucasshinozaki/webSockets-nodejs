import jwt from "jsonwebtoken"

function autorizarUsuario(socket, next) {
    const tokenJwt = socket.handshake.auth.token

    try {
        jwt.verify(tokenJwt, process.env.SECRETO_JWT)
        next()
    } catch(erro) {
        next(erro)
    }
}

export default autorizarUsuario