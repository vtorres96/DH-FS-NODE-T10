const { cards } = require("../data/data")

module.exports = {
  index(req, res, next) {
    res.render('index', { cards });
  }
}