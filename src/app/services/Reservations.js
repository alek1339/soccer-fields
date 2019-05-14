const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Reservation Schema
const ReservationSchema = new Schema({
  reservedField: {
    type: String,
    required: true
  },
  startingTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  reservingUserId: {
    type: String,
    required: true
  }
});

module.exports = Reservation = mongoose.model("Reservation", ReservationSchema);
