const express = require('express');
const router = express.Router();

const AnswersController = require('../controllers/answers');

router.get('/:dicussionId', AnswersController.list);

module.exports = router;
