const { response } = require('express');

const advinhaMelhorCurso = (curso)  => {
  return new Promise((resolve, reject) => {
    if (curso == 'Full Stack') {
      resolve({
        success: true,
        nomeDoCurso: curso,
        mensagem: 'O curso ' + curso + ' realmente é o mais legal da DH'
      });
    } else {
      reject({
        success: false,
        mensagem: 'Que pena! você não advinhou o melhor curso'
      });
    }
  });
}

const melhoresMateriasDoMelhorCurso = (resposta) => {
  return new Promise((resolve, reject) => {
    if (resposta.success) {
      resolve({
        objeto: resposta,
        mensagem: 'As matérias mais legais do curso ' + resposta.nomeDoCurso + ' são  API e React'
      });
    } else {
      reject('Não temos matérias para listar do curso ' + resposta.nomeDoCurso)
    }
  });
}

let objeto = advinhaMelhorCurso('Full Stack')
  .then(resposta => {
    return melhoresMateriasDoMelhorCurso(resposta)
  })
  .then(resposta => {
    return resposta
  })
  .catch(error => {
    console.log(error)
  })

objeto.then(resposta => {
 console.log(resposta)
})