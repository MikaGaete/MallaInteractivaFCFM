const router = require('express').Router();
const controller = require('../controllers/careers');

router.get('/', controller.GetCareers);
router.get('/:career', controller.GetCareer);

module.exports = router;