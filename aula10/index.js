// Servidor utilizando express
const express = require("express")

// criando aplicacao express
const app = express()

app.get('/', (req, res) => {
  let array = ['item 1', 'item 2', 'item 3']
  let objeto = {"nome": "Victor"}
  let arrayDeObjetos = [
    {
      "nome": "Victor"
    },
    {
      "nome": "Murilo"
    },
  ]
  res.send(arrayDeObjetos)
})

app.listen(3000, () => {
  console.log('QUERO COMER, BORA PRO INTERVALO')
})

