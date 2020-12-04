module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING(255)
    },
    {
        tableName: "users"
    });
    return User;
}