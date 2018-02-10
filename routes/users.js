const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');
const Event = require('../models/event');

/* GET user listing. */
router.get('/', (req, res, next) => {
  res.json({user: req.user});
});

//create user
router.post('/', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, acc) => {
    if (err) {
      return res.json({success: false});
    }

    passport.authenticate('local')(req, res, () => {
      const userEv = new Event({type: 'user', username: req.body.username, location: req.body.location});
      userEv.save((err, ev) => {
        if (err) {
          return res.json({success: false});
        } else {
          res.json({success: true});
        }
      });
    });
  });
});

module.exports = router;
