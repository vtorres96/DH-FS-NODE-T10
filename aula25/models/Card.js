module.exports = (sequelize, DataTypes) => {

  const Card = sequelize.define('Card', {
      id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
      },
      path_image: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.STRING,
  },
  {
      tableName: "cards"
  });
  return Card;
}