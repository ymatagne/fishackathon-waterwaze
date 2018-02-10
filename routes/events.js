const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

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
      coordinates: [0, 0]
    },
    details: {
      image: 'https://www.placecage.com/c/300/300'
    }
  }]);
});

module.exports = router;
