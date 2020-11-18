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
        pf: 0
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
