const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');
const { getDestination } = require('../controllers/destinationController');


router.post('/', async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.status(201).json(destination);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', getDestination)

module.exports = router;
