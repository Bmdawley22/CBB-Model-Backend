const OffStats = require('../models').off_stats_pg;
const DefStats = require('../models').def_stats_pg;

const constants = require('../constants');

const getAllOffStats = (req, res) => {
    OffStats.findAll()
    .then(offStats => {
        res.status(constants.SUCCESS).json(offStats)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const getAllDefStats = (req, res) => {
    DefStats.findAll()
    .then(defStats => {
        res.status(constants.SUCCESS).json(defStats)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getAllOffStats,
    getAllDefStats
}