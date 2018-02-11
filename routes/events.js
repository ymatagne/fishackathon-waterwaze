const express = require('express');
const passport = require('passport');
const router = express.Router();
const Event = require('../models/event');

router.get('/', (req, res) => {
  Event.find((err, evnt) => {
    if (err) res.json({success: false});
    res.json(evnt);
  });
});

router.post('/', (req, res) => {
  const ev = new Event(req.body);
  console.log(ev);

  ev.save((err, ev) => {
    console.log(err);
    if (err) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
});

module.exports = router;
