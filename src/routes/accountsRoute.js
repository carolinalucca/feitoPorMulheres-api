const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');

router.get('/', controller.get);
router.post('/create', controller.add);

module.exports = router;