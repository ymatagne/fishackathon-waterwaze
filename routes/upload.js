const express = require('express');
const passport = require('passport');
const multer = require('multer');
const upload = multer({ dest: 'img/' });
const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({success: true, path: req.file.path});
  } else {
    res.json({success: true});
  }
});

module.exports = router;
