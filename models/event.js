const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Event = new Schema({
  type: String,
  location: {
    type: { type: String },
    coordinates: [Number],
  },
  details: {
    image: String,
  },
});

Event.index({ location: "2dsphere" })

module.exports = mongoose.model('Event', Event);
