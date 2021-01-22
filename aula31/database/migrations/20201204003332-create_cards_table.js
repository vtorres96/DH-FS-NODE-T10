'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable('cards', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      path_image: DataType.STRING,
      title: DataType.STRING,
      text: DataType.STRING,
      createdAt: {
        type: DataType.DATE
      },
      updatedAt: {
        type: DataType.DATE
      }
    });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('cards');
  }
};
