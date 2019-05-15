const express = require("express");
const router = express.Router();

const Field = require("../models/Field");

// Fields Route Test
router.get("/test", (req, res) => res.json({ msg: "Fields Works" }));

// @route   GET /server/fields/get
// @desc Fetch All Fields
// @access  Public
router.get("/", (req, res) => {
  Field.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nofieldssfound: "No fields found" }));
});

// @route   POST /server/fields/add
// @desc Create New Field
// @access To be considered later
router.post("/add", (req, res) => {
  const newField = new Field({
    name: req.body.name,
    address: req.body.address,
    photos: req.body.pictures,
    tel: req.body.tel,
    openFrom: req.body.openFrom,
    openTo: req.body.openTo
  });

  newField
    .save()
    .then(field => res.json(field))
    .catch(err => console.log("Error:" + err));
});

// @route   GET server/fields/id
// @desc    Get Single field
// @access  Public
router.get("/:id", (req, res) => {
  // let lastIndexOfId = req.headers.referer.lastIndexOf("id");
  // const id = req.headers.referer.slice(lastIndexOfId + 3);

  const id = req.params.id;
  Field.findById(id)
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nofieldsfound: "No field found" }));
});

// @route  POST server/fields/edit
// @desc Edit field
// @access Private
router.put("/:id", (req, res) => {
  // let lastIndexOfId = req.headers.referer.lastIndexOf("id");
  // const id = req.headers.referer.slice(lastIndexOfId + 3);

  const id = req.params.id;

  Field.findByIdAndUpdate(id, { $set: req.body }, function(err, result) {
    if (err) {
      console.log("Error:" + err);
    }
    // console.log("RESULT: " + result);
    res.json("Done");
  });
});

// @route  DELETE server/fields/delete
// @desc Delete field
// @access Private

router.delete("/:id", (req, res) => {
  // let lastIndexOfId = req.headers.referer.lastIndexOf("id");
  // const id = req.headers.referer.slice(lastIndexOfId + 3);
  const id = req.params.id;

  Field.findByIdAndRemove(id, (err, todo) => {
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
      message: "Field successfully deleted",
      id: todo._id
    };
    // return res.status(200).send(response);
    res.json("Done");
  });
});

module.exports = router;
