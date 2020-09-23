// Servidor utilizando express
const express = require("express")

// criando aplicacao express
const app = express()

// importando rotas da aplicacao
const routes = require("./routes")

app.use(routes)

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})