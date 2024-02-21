const express = require('express');
const router = express.Router();

const DiscussionsController = require('../controllers/discussions');

router.get('/', DiscussionsController.list);
router.post('/', DiscussionsController.create);
router.get('/:discussinId', DiscussionsController.get_by_id);

module.exports = router;
