'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      total_w: {
        type: Sequelize.INTEGER
      },
      total_l: {
        type: Sequelize.INTEGER
      },
      w_l_perc: {
        type: Sequelize.INTEGER
      },
      srs: {
        type: Sequelize.INTEGER
      },
      sos: {
        type: Sequelize.INTEGER
      },
      pts: {
        type: Sequelize.INTEGER
      },
      fg: {
        type: Sequelize.INTEGER
      },
      fga: {
        type: Sequelize.INTEGER
      },
      fg_perc: {
        type: Sequelize.INTEGER
      },
      three_pt: {
        type: Sequelize.INTEGER
      },
      three_pta: {
        type: Sequelize.INTEGER
      },
      three_pt_perc: {
        type: Sequelize.INTEGER
      },
      ft: {
        type: Sequelize.INTEGER
      },
      fta: {
        type: Sequelize.INTEGER
      },
      ft_perc: {
        type: Sequelize.INTEGER
      },
      orb: {
        type: Sequelize.INTEGER
      },
      trb: {
        type: Sequelize.INTEGER
      },
      asst: {
        type: Sequelize.INTEGER
      },
      stl: {
        type: Sequelize.INTEGER
      },
      blk: {
        type: Sequelize.INTEGER
      },
      tov: {
        type: Sequelize.INTEGER
      },
      pf: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_models');
  }
};