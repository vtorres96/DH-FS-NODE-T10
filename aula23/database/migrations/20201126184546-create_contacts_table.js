'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable('contacts', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataType.STRING,
      email: DataType.STRING,
      message: DataType.STRING,
      excluido: {
        type: DataType.TINYINT,
        defaultValue: 0
      },
      createdAt: {
        type: DataType.DATE
      },
      updatedAt: {
        type: DataType.DATE
      },
    });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('contacts')
  }
};
