module.exports = (sequelize, DataType) => {
	const Card = sequelize.define(
		'Card', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    path_image: {
			type: DataType.STRING,
		},
		title: {
			type: DataType.STRING,
		},
		text:{
			type: DataType.STRING,
		}
	},{
    tableName: 'cards',
	});
	return Card;
};