const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Event = new Schema({
  type: { type: String, required: true },
  location: {
    type: { type: String },
    coordinates: [Number],
  },
  details: {
    image: String,
    heigth: String,
    weigth: String,
    type: String,
    date: String,
  },
});

Event.index({ location: "2dsphere" })

module.exports = mongoose.model('Event', Event);
