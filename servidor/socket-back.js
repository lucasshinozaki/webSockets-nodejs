import "dotenv/config"
import registrarEventosCadastro from "./registrarEventos/cadastro.js"
import registrarEventosDocumento from "./registrarEventos/documento.js"
import registrarEventosInicio from "./registrarEventos/inicio.js"
import registrarEventosLogin from "./registrarEventos/login.js"
import io from "./servidor.js"
import autorizarUsuario from "./middlewares/autorizarUsuario.js"

const nspUsuario = io.of("/usuarios")

nspUsuario.use(autorizarUsuario)

nspUsuario.on("connection", (socket) => {
    registrarEventosInicio(socket, nspUsuario)
    registrarEventosDocumento(socket, nspUsuario)
})

io.of("/").on("connection", (socket) => {
    
    registrarEventosCadastro(socket, io)
    registrarEventosLogin(socket, io)

})

