"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("friends", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      nameOfUser: {
        type: Sequelize.STRING,
      },
      friendUserId: {
        type: Sequelize.INTEGER,
      },
      friendName: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      messageId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("friends");
  },
};
