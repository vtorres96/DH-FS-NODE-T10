module.exports = (sequelize, DataType) => {
	const Contact = sequelize.define(
		'Contact', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
			type: DataType.STRING,
		},
		email: {
			type: DataType.STRING,
		},
		message:{
			type: DataType.STRING,
    },
    excluido:{
      type: DataType.INTEGER
    }
	},{
    tableName: 'contacts',
	});
	return Contact;
};