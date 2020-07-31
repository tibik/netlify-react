const express = require('express');

const emojis = require('./emojis');
const contacts = require('./contacts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/contacts', contacts);

module.exports = router;
