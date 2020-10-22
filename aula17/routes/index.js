var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cards = [
    {
      'caminho_imagem': './images/card-vingadores.jpg',
      'titulo': 'Primeiro Título',
      'texto': 'Primeiro texto do card que temos para exibir',
      'botao': 'Ver mais'
    },
    {
      'caminho_imagem': './images/card-vingadores.jpg',
      'titulo': 'Segundo Título',
      'texto': 'Segundo texto do card que temos para exibir',
      'botao': 'Ver mais'
    },
    {
      'caminho_imagem': './images/card-vingadores.jpg',
      'titulo': 'Terceiro Título',
      'texto': 'Terceiro texto do card que temos para exibir',
      'botao': 'Ver mais'
    },
  ];
  res.render('index', { cards: cards });
});

module.exports = router;