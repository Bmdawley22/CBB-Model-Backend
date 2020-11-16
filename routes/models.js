const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:id', ctrl.models.getUserModels);
router.post('/saveModel', ctrl.models.saveModel);


module.exports = router;