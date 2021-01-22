const { User }  = require('../models');

/*
User.create({
    name: "Fernanda P",
    email: "fernanda@ceo.com",
    password: "123456"
});
*/
User.findAll().then(
    users => {
        console.log(users[0].toJSON());
        // process.exit();
    }
)

User.findByPk(2).then(
    user => console.log(user.toJSON())
)
