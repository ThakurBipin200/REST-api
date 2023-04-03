const express = require("express");
require("../db/conn");
const Students = require("../models/students");
const studentRouters = require("./routers/studentRouters");

const app = express();
const port = process.env.PORT || 8000;
//post

app.use(express.json());
app.use(studentRouters);

// //using Promises .then()
// // app.post("/students", (req, res) => {
// //   const user = new Students(req.body);
// //   user
// //     .save()
// //     .then(() => {
// //       res.status(201).send(req.body);
// //     })
// //     .catch((e) => {
// //       res.status(400).send(e);
// //     });
// //   console.log(req.body);
// //   // res.send(req.body);
// // });

// //using async and await Method
// app.post("/students", async (req, res) => {
//   try {
//     const user = new Students(req.body);
//     const createBody = await user.save();
//     res.status(201).send(createBody);
//   } catch (e) {
//     res.status(400).send(e);
//   }
//   console.log(req.body);
//   // res.send(req.body);
// });

// app.get("/students", async (req, res) => {
//   try {
//     const studentsData = await Students.find();
//     res.status(200).send(studentsData);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentsData = await Students.findById(_id);
//     if (!studentsData) {
//       return res.status(404).send();
//     } else {
//       res.status(200).send(studentsData);
//     }
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.delete("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentsData = await Students.findByIdAndDelete(_id);
//     if (!studentsData) {
//       return res.status(404).send();
//     } else {
//       res.status(200).send(studentsData);
//     }
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.patch("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentsData = await Students.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     if (!studentsData) {
//       return res.status(404).send();
//     } else {
//       res.status(200).send(studentsData);
//     }
//   } catch (e) {
//     res.status(404).send(e);
//   }
// });

app.listen(port, () => {
  console.log(`I am listening ${port}`);
});

// we don't need the express.json() and express.urlencoded() for get and and delete request
// it need in the  post and put request
// express.json is inbuilt method in express to recognize the incoming request object as a JSON Object
