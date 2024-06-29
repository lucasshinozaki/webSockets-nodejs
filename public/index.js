import "./socket-front-index.js"
const listaDocumento = document.getElementById("lista-documentos")


function inserirLinkDocumento(nomeDocumento) {
    listaDocumento.innerHTML += `
        <a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
            ${nomeDocumento}
        </a>
    `
}

export {inserirLinkDocumento}