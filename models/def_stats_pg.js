'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class def_stats_pg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  def_stats_pg.init({
    school: DataTypes.STRING,
    total_g: DataTypes.INTEGER,
    total_w: DataTypes.INTEGER,
    total_l: DataTypes.INTEGER,
    w_l_perc: DataTypes.FLOAT,
    srs: DataTypes.FLOAT,
    sos: DataTypes.FLOAT,
    conf_w: DataTypes.INTEGER,
    conf_l: DataTypes.INTEGER,
    home_w: DataTypes.INTEGER,
    home_l: DataTypes.INTEGER,
    away_w: DataTypes.INTEGER,
    away_l: DataTypes.INTEGER,
    pts_all: DataTypes.FLOAT,
    fg_all: DataTypes.FLOAT,
    fga_all: DataTypes.FLOAT,
    fg_perc_all: DataTypes.FLOAT,
    three_pt_all: DataTypes.FLOAT,
    three_pta_all: DataTypes.FLOAT,
    three_pt_perc_all: DataTypes.FLOAT,
    ft_all: DataTypes.FLOAT,
    fta_all: DataTypes.FLOAT,
    orb_all: DataTypes.FLOAT,
    trb_all: DataTypes.FLOAT,
    asst_all: DataTypes.FLOAT,
    stl_all: DataTypes.FLOAT,
    blk_all: DataTypes.FLOAT,
    opp_tov: DataTypes.FLOAT,
    opp_pf: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'def_stats_pg',
  });
  return def_stats_pg;
};