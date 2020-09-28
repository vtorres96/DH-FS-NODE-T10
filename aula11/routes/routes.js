const express = require("express")
const routes = express.Router()

// importando controllers
const ProdutoController = require("../controllers/ProdutoController")
const QueryController = require("../controllers/QueryController")

// Desafio - terão que criar uma rota /produto/adicionar que terá 4 parâmetros
// sendo assim, iremos receber estes parâmetros e retornar um produto com o que recebemos,
// Exemplo: /:nome/:preco/:quantidade/:codigo
//         /teste/10.00/1000/testebarcode
routes.get('/produto/adicionar/:nome/:preco?/:quantidade?/:codigo?', ProdutoController.getProduto)

// Desafio - criar um parâmetro para nome e uma query string para sobrenome 
// e exibir os dois concatenados na tela com a mensagem de saudação "Olá nome sobrenome"
routes.get('/query/params/:nome', QueryController.getQueryParams)

module.exports = routes

