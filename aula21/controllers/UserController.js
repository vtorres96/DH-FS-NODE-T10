const users = require("../data/users");
const saveData = require("../utils/saveData");

module.exports = {
  create(req, res, next) {
    res.render('create-user');
  },

  save(req, res, next){

  },

  login(req, res, next) {
    res.render('login');
  },
}