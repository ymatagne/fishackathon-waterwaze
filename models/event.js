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
    image: { type: String },
    heigth: { type: String },
    weigth: { type: String },
    type: { type: String }
  },
});

Event.index({ location: "2dsphere" })

module.exports = mongoose.model('Event', Event);
