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

  console.log(newReservation)

  newReservation
    .save()
    .then(Reservation => res.json(Reservation))
    .catch(err => console.log("Error:" + err));
});

// @route   GET /server/reservation/get
// @desc Fetch All Reservations
// @access  Public
router.get("/", (req, res) => {
  Reservation.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ noreservationsfound: "No reservations found" })
    );
});

// @route   GET server/reservations/id
// @desc    Get Single resetvation
// @access  Public
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Reservation.find()
    .where("reservedField")
    .equals(id)
    .sort({ date: -1 })
    .then(fields => res.json(fields))
    .catch(err =>
      res.status(404).json({ noreservationsfound: "No resetvation found" })
    );
});

module.exports = router;
