// callbacks
const calcular = (numero1, numero2, operacao) => {
  operacao(numero1, numero2)
  console.log("A operação foi realizada com sucesso")
}

const soma = (numero1, numero2) => {
  console.log(numero1 + numero2)
}

const subtrai = (numero1, numero2) => {
  console.log(numero1 - numero2)
}

const divide = (numero1, numero2) => {
  console.log(numero1 / numero2)
}

const multiplica = (numero1, numero2) => {
  console.log(numero1 * numero2)
}

module.exports = {
  calcular,
  soma,
  subtrai,
  divide,
  multiplica
}