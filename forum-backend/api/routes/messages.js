const express = require('express');
const router = express.Router();

const MessagesController = require('../controllers/messages');

router.get('/contacts', MessagesController.contacts);
router.get('/:username/chat', MessagesController.chat);

module.exports = router;
