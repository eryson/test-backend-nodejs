'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'categoryId', {
      type: Sequelize.INTEGER,
      references: { model: 'Categories', key: 'id' },
      onDelete: 'CASCADE',
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('Products', 'categoryId');
  },
};
