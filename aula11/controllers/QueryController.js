const QueryController = {
  getQueryParams: (req, res) => {
    let { nome } = req.params
    let { sobrenome } = req.query

    let frase = "Olá  " + nome + " " + sobrenome

    console.log(frase)
  }
}

module.exports = QueryController