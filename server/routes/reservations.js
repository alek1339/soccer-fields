const express = require("express");
const router = express.Router();

const Reservation = require("../models/Reservations");

// Test reservations route
router.get("/test", (req, res) => res.json({ msg: "Reservations Works" }));

// @route   POST /server/reservation/add
// @desc Create New Reservation
// @access private
router.post("/add", (req, res) => {
  const newReservation = new Reservation({
    reservedField: req.body.reservedField,
    startingTime: req.body.startingTime,
    endTime: req.body.endTime,
    reservingUserId: req.body.reservingUserId
  });

  newReservation
    .save()
    .then(Reservation => res.json(Reservation))
    .catch(err => console.log("Error:" + err));
});

module.exports = router;
