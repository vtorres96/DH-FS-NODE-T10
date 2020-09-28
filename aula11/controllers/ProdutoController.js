const ProdutoController = {
  getProduto: (req, res) => {
    let { nome, preco, quantidade, codigo }  = req.params

    let produto = {
      nome,
      preco,
      quantidade,
      codigo
    }
    
    res.send(produto)
  }
}

module.exports = ProdutoController
