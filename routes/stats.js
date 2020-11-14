const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/off-stats', ctrl.stats.getAllOffStats);


module.exports = router;