const { Contact } = require('../models/');
const { Card } = require('../models/');

module.exports = {
  async list(req, res, next) {
    let contacts = await Contact.findAll({
      where: {
        excluido: 0
      }
    });

    res.render('contacts', { contacts, user: req.session.user });
  },

  async create(req, res, next) {
    let cards = await Card.findAll();

    let contact = { ...req.body };
    await Contact.create(contact);

    res.render('index', { cards, added: true });
  }, 

  async edit(req, res, next) {
    let id = req.params.id;
    let contact = await Contact.findByPk(id);

    res.render('edit-contact', { contact });
  },

  async update(req, res, next) {
    let id = req.params.id;
    let contact = await Contact.findByPk(id);
    
    let { nome, email, mensagem } = req.body;

    contact.name = nome;
    contact.email = email;
    contact.message = mensagem;

    await contact.save();

    res.render('edit-contact', { contact, updated: true });
  },

  async delete(req, res, next) {
    let id = req.params.id;
    let contact = await Contact.findByPk(id);
    
    contact.excluido = 1;

    await contact.save();

    let contacts = await Contact.findAll({
      where: {
        excluido: 0
      }
    });

    res.render('contacts', { contacts, deleted: true });
  },
}



