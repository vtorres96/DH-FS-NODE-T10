module.exports = (sequelize, DataType) => {

  const Contact = sequelize.define('Contact', {
      id:{
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: DataType.STRING,
      email: DataType.STRING,
      message: DataType.STRING,
      deleted: DataType.BOOLEAN,
  },
  {
      tableName: "contacts"
  });
  return Contact;
}