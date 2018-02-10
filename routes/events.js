const express = require('express');
const passport = require('passport');
const router = express.Router();
const Event = require('../models/event');

router.get('/', (req, res) => {
  res.json([{
    type: 'fish',
    location: {
      type: 'Point',
      coordinates: [0, 0]
    },
    details: {
      length: 100,
      weight: 5.4,
      image: 'https://www.placecage.com/c/300/300'
    }
  }, {
    type: 'dam',
    location: {
      type: 'Point',
      coordinates: [-79.3836673, 43.652829700000005]
    },
    details: {
      image: 'https://www.placecage.com/c/300/300'
    }
  }]);
});

router.post('/', (req, res) => {
});

module.exports = router;
