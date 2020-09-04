function trocarPalavraDaFrase(frase, busca, substituicao){
  return frase.replace(busca, substituicao)
}

const trocarPalavraDaFraseArrowFunction = (frase, busca, substituicao) =>
  frase.replace(busca, substituicao)

const trocarTodasPalavrasDaFrase = (frase, busca, substituicao) => 
  frase.split(busca).join(substituicao)

// resolvendo de forma que altere apenas a primeira ocorrencia - com function normal sem seguir padrao ES6 e utilizando arrow function
// console.log(trocarPalavraDaFrase('Gosto de programar em VBA, pois, VBA é legal', 'VBA', 'JS'))

// resolvendo de forma que altere apenas a primeira ocorrencia - com padrao ES6 e utilizando arrow function
// console.log(trocarPalavraDaFraseArrowFunction('Gosto de programar em VBA, pois, VBA é legal', 'VBA', 'JS'))

// resolvendo de forma que altere todas ocorrencias - com padrao ES6 e utilizando arrow function
console.log(trocarTodasPalavrasDaFrase('Gosto de programar em VBA, pois, VBA é legal', 'VBA', 'JS'))