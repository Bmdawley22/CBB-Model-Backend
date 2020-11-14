'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class off_stats_pg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  off_stats_pg.init({
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
    pts: DataTypes.FLOAT,
    fg: DataTypes.FLOAT,
    fga: DataTypes.FLOAT,
    fg_perc: DataTypes.FLOAT,
    three_pt: DataTypes.FLOAT,
    three_pta: DataTypes.FLOAT,
    three_pt_perc: DataTypes.FLOAT,
    ft: DataTypes.FLOAT,
    fta: DataTypes.FLOAT,
    ft_perc: DataTypes.FLOAT,
    orb: DataTypes.FLOAT,
    trb: DataTypes.FLOAT,
    asst: DataTypes.FLOAT,
    stl: DataTypes.FLOAT,
    blk: DataTypes.FLOAT,
    tov: DataTypes.FLOAT,
    pf: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'off_stats_pg',
  });
  return off_stats_pg;
};