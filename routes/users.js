const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user: req.user});
});

router.post('/', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, acc) => {
    if (err) {
      return res.json({success: false});
    }

    passport.authenticate('local')(req, res, () => {
      res.json({success: true});
    });
  });
});

module.exports = router;
