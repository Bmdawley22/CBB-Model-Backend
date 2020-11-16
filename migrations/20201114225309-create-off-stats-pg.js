'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('off_stats_pgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school: {
        type: Sequelize.STRING
      },
      total_g: {
        type: Sequelize.INTEGER
      },
      total_w: {
        type: Sequelize.INTEGER
      },
      total_l: {
        type: Sequelize.INTEGER
      },
      w_l_perc: {
        type: Sequelize.FLOAT
      },
      srs: {
        type: Sequelize.FLOAT
      },
      sos: {
        type: Sequelize.FLOAT
      },
      conf_w: {
        type: Sequelize.INTEGER
      },
      conf_l: {
        type: Sequelize.INTEGER
      },
      home_w: {
        type: Sequelize.INTEGER
      },
      home_l: {
        type: Sequelize.INTEGER
      },
      away_w: {
        type: Sequelize.INTEGER
      },
      away_l: {
        type: Sequelize.INTEGER
      },
      pts: {
        type: Sequelize.FLOAT
      },
      fg: {
        type: Sequelize.FLOAT
      },
      fga: {
        type: Sequelize.FLOAT
      },
      fg_perc: {
        type: Sequelize.FLOAT
      },
      three_pt: {
        type: Sequelize.FLOAT
      },
      three_pta: {
        type: Sequelize.FLOAT
      },
      three_pt_perc: {
        type: Sequelize.FLOAT
      },
      ft: {
        type: Sequelize.FLOAT
      },
      fta: {
        type: Sequelize.FLOAT
      },
      ft_perc: {
        type: Sequelize.FLOAT
      },
      orb: {
        type: Sequelize.FLOAT
      },
      trb: {
        type: Sequelize.FLOAT
      },
      asst: {
        type: Sequelize.FLOAT
      },
      stl: {
        type: Sequelize.FLOAT
      },
      blk: {
        type: Sequelize.FLOAT
      },
      tov: {
        type: Sequelize.FLOAT
      },
      pf: {
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('off_stats_pgs');
  }
};