const router = require('express').Router();
const config = require('./routes/configurations');
const careers = require('./routes/careers');

router.use('/files', config);
router.use('/careers', careers);

module.exports = router;