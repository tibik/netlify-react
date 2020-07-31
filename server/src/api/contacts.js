const express = require('express');

const contactsList = require('../mock/contactsList');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const contacts = contactsList;
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
