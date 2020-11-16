const userModels = require('../models').user_models;

const constants = require('../constants');


const getUserModels = (req, res) => {
    userModels.findAll({
        where: {
            user_id: req.params.id
        }
    })
    .then(models => {
        res.status(constants.SUCCESS).json(models);

    })
    .catch(err => {
        console.log(err)
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const saveModel = (req, res) => {
    console.log(req.body)
    userModels.create(req.body)
    .then(newModel => {
        res.status(constants.SUCCESS).json(newModel)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getUserModels,
    saveModel
}