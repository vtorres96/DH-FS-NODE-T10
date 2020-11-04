const bcrypt = require("bcrypt");
const users = require("../data/users");
const saveData = require("../utils/saveData");

module.exports = {
  create(req, res, next) {
    res.render('create-user');
  },

  save(req, res, next){
    let id = users.length + 1;
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let user = { id, ...req.body }
    users.push(user)

    saveData(users, "users.js");

    res.render('create-user', { added: true });
  },

  login(req, res, next) {
    res.render('login');
  },
}