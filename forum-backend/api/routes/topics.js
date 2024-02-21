const express = require('express');
const router = express.Router();

const TopicsController = require('../controllers/topics');

router.get('/', TopicsController.list);
router.post('/', TopicsController.create);
router.get('/:topicSlug', TopicsController.get_by_slug);

module.exports = router;
