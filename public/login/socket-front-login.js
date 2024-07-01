const socket = io()

function emitirAutenticarUsuario(dados) {
    socket.emit("autentificar_usuario", dados)
}

export { emitirAutenticarUsuario }