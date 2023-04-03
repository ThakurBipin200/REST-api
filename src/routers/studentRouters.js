const express = require("express");
const router = new express.Router();
const Students = require("../../models/students");

router.get("/", (req, res) => {
  res.send("Hii I am using router express");
});

//using Promises .then()
// router.post("/students", (req, res) => {
//   const user = new Students(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(req.body);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
//   console.log(req.body);
//   // res.send(req.body);
// });

//using async and await Method

// posting the data into database CREAT
router.post("/students", async (req, res) => {
  try {
    const user = new Students(req.body);
    const createBody = await user.save();
    res.status(201).send(createBody);
  } catch (e) {
    res.status(400).send(e);
  }
  console.log(req.body);
  // res.send(req.body);
});

//getting the data READ
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Students.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

//getting the data by id READ
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentsData = await Students.findById(_id);
    if (!studentsData) {
      return res.status(404).send();
    } else {
      res.status(200).send(studentsData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

// Deleting the data DELETE

router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentsData = await Students.findByIdAndDelete(_id);
    if (!studentsData) {
      return res.status(404).send();
    } else {
      res.status(200).send(studentsData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//Updating Data UPDATE
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentsData = await Students.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!studentsData) {
      return res.status(404).send();
    } else {
      res.status(200).send(studentsData);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
