module.exports = (sequelize, DataType) => {
	const User = sequelize.define(
		'User', 
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
		password:{
			type: DataType.STRING,
		}
	},{
    tableName: 'users',
	});
	return User;
};