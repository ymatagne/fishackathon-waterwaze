const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.post('/', (req, res) => {
});

module.exports = router;
