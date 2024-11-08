const router = require('express').Router();
const controller = require('../controllers/configurations');

router.post('/files', controller.FromFile);

module.exports = router;