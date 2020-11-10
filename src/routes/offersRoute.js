const express = require('express');
const router = express.Router();
const controller = require('../controllers/offerController');

router.get('/', controller.get);
router.post('/create', controller.add);
router.delete('/remove/:id', controller.remove);
router.patch('/edit/:id', controller.edit);

module.exports = router;