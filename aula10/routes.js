const express = require("express")
const routes = express.Router()

// Desafio 2 - terão que criar uma rota /produto/adicionar que terá 4 parâmetros
// sendo assim, iremos receber estes parâmetros e retornar um produto com o que recebemos,
// Exemplo: /:nome/:preco/:quantidade/:codigo
//         /teste/10.00/1000/testebarcode

routes.get('/produto/adicionar/:nome/:preco/:quantidade/:codigo', (req, res) => {
  let { nome, preco, quantidade, codigo }  = req.params

  let produto = {
    nome,
    preco,
    quantidade,
    codigo
  }
  
  res.send(produto)
})

module.exports = routes