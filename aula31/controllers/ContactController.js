const { Contact, Card, Sequelize } = require("../models");

module.exports = {
  async list(req, res, next) {
    let { word = '', page = 1 } = req.query;
    page = parseInt(page);
    let limit = 10;

    let contacts = await Contact.findAll({
      where: {
        email: {
          [Sequelize.Op.like]: `%${word}%`
        },
        deleted: 0
      },
      limit: limit,
      offset: ((page - 1) * limit) 
    });
    
    let total = await Contact.findAll({ 
      where: {
        email: {
          [Sequelize.Op.like]: `%${word}%`
        },
        deleted: 0
      }
    });

    let totalPages = Math.ceil(total.length / limit);

    res.render('contacts', { contacts, user: req.session.user, page, totalPages, word });
  },

  async create(req, res, next) {
    let contact = { ...req.body };

    await Contact.create(contact);

    return res.status(200).json({ message: 'Mensagem de contato enviada com sucesso' });
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

    res.render('edit-contact', { contact, updated: true })
  },

  async delete(req, res, next) {
    let id = req.params.id;
    let contact = await Contact.findByPk(id);

    contact.deleted = true;

    await contact.save();
    
    res.redirect('/contato/listar');
  },
}



