'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_models.init({
    user_id: DataTypes.INTEGER,
    total_w: DataTypes.INTEGER,
    total_l: DataTypes.INTEGER,
    w_l_perc: DataTypes.INTEGER,
    srs: DataTypes.INTEGER,
    sos: DataTypes.INTEGER,
    pts: DataTypes.INTEGER,
    fg: DataTypes.INTEGER,
    fga: DataTypes.INTEGER,
    fg_perc: DataTypes.INTEGER,
    three_pt: DataTypes.INTEGER,
    three_pta: DataTypes.INTEGER,
    three_pt_perc: DataTypes.INTEGER,
    ft: DataTypes.INTEGER,
    fta: DataTypes.INTEGER,
    ft_perc: DataTypes.INTEGER,
    orb: DataTypes.INTEGER,
    trb: DataTypes.INTEGER,
    asst: DataTypes.INTEGER,
    stl: DataTypes.INTEGER,
    blk: DataTypes.INTEGER,
    tov: DataTypes.INTEGER,
    pf: DataTypes.INTEGER,
    pts_all: DataTypes.INTEGER,
    fg_all: DataTypes.INTEGER,
    fga_all: DataTypes.INTEGER,
    fg_perc_all: DataTypes.INTEGER,
    three_pt_all: DataTypes.INTEGER,
    three_pta_all: DataTypes.INTEGER,
    three_pt_perc_all: DataTypes.INTEGER,
    ft_all: DataTypes.INTEGER,
    fta_all: DataTypes.INTEGER,
    orb_all: DataTypes.INTEGER,
    trb_all: DataTypes.INTEGER,
    asst_all: DataTypes.INTEGER,
    stl_all: DataTypes.INTEGER,
    blk_all: DataTypes.INTEGER,
    opp_tov: DataTypes.INTEGER,
    opp_pf: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_models',
  });
  return user_models;
};