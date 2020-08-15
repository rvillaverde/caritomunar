'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Users', [
    //   {
    //     firstName: 'admin',
    //     lastName: 'admin',
    //     email: 'admin@admin.com',
    //     password: '$2b$08$xPj5BgqlEgz/R5a3T6SLBOlRl72JNC7tnwTVFlCNQKQJthSNLVUKm',
    //     roleId: 1,
    //   }
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
