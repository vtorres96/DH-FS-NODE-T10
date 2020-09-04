function naoPareDeContarImparesAte(numero) {
  let quantidadeDeImpares = 0;
  for (let i = 0; i <= numero; i++) {
    if (i % 2 == 1) {
      quantidadeDeImpares = quantidadeDeImpares + 1;
    }
  }
  console.log(quantidadeDeImpares)
}

naoPareDeContarImparesAte(10)