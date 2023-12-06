require('dotenv').config();

const express = require("express");
const ProblemTrash = require("../../../model/cases/problem_trash.model");
const multer = require('multer');

const app = express();

app.put("/admin-cases-problemtrash/:id", async (req, res) => {
  try {
    const upstream_data = await ProblemTrash.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-cases-problemtrash", async (req, res) => {
  try {
    const problem_trash = await ProblemTrash.find();
    res.json(problem_trash);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload
const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageCase1Storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}casesimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'image_case1.webp');
  }
});

const imageCase1Upload = multer({
  storage: imageCase1Storage,
  limits: 100 * 1024
})

app.post('/image-case1-upload', imageCase1Upload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }
  return res.status(200).send("File uploaded success");
})
module.exports = app;