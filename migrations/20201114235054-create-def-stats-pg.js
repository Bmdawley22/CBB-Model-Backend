'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('def_stats_pgs', {
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
      pts_all: {
        type: Sequelize.FLOAT
      },
      fg_all: {
        type: Sequelize.FLOAT
      },
      fga_all: {
        type: Sequelize.FLOAT
      },
      fg_perc_all: {
        type: Sequelize.FLOAT
      },
      three_pt_all: {
        type: Sequelize.FLOAT
      },
      three_pta_all: {
        type: Sequelize.FLOAT
      },
      three_pt_perc_all: {
        type: Sequelize.FLOAT
      },
      ft_all: {
        type: Sequelize.FLOAT
      },
      fta_all: {
        type: Sequelize.FLOAT
      },
      orb_all: {
        type: Sequelize.FLOAT
      },
      trb_all: {
        type: Sequelize.FLOAT
      },
      asst_all: {
        type: Sequelize.FLOAT
      },
      stl_all: {
        type: Sequelize.FLOAT
      },
      blk_all: {
        type: Sequelize.FLOAT
      },
      opp_tov: {
        type: Sequelize.FLOAT
      },
      opp_pf: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('def_stats_pgs');
  }
};