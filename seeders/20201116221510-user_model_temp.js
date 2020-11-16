'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_models', [
      {
        user_id: 0,
        total_w: 0,
        total_l: 0,
        w_l_perc: 0,
        srs: 0,
        sos: 0,
        pts: 0,
        fg: 0,
        fga: 0,
        fg_perc: 0,
        three_pt: 0,
        three_pta: 0,
        three_pt_perc: 0,
        ft: 0,
        fta: 0,
        ft_perc: 0,
        orb: 0,
        trb: 0,
        asst: 0,
        stl: 0,
        blk: 0,
        tov: 0,
        pf: 0,
        pts_all: 0,
        fg_all: 0,
        fga_all: 0,
        fg_perc_all: 0,
        three_pt_all: 0,
        three_pta_all: 0,
        three_pt_perc_all: 0,
        ft_all: 0,
        fta_all: 0,
        orb_all: 0,
        trb_all: 0,
        asst_all: 0,
        stl_all: 0,
        blk_all: 0,
        opp_tov: 0,
        opp_pf: 0
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
