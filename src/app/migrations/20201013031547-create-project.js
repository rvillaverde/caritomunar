'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      thumbnailCdnId: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      show: {
        type: Sequelize.BOOLEAN
      },
      order: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        // allowNull: false
      },
      internalUrl: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      url: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      homeDescription: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      goal: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      myRole: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};