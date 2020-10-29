const { cards } = require("../data/cards")

module.exports = {
  index(req, res, next) {
    res.render('index', { cards });
  }
}