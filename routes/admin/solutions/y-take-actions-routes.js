require('dotenv').config();

const express = require("express");
const Solution1 = require("../../../model/solutions/solution-1.model");
const multer = require('multer');

const app = express();

app.put("/admin-solution-1/:id", async (req, res) => {
  try {
    const upstream_data = await Solution1.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solution-1", async (req, res) => {
  try {
    const y_should_we_take_action = await Solution1.find();
    res.json(y_should_we_take_action);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload
const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageSolution1Storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}solutionsimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'action.webp');
  }
});

const imageSolutionUpload = multer({
  storage: imageSolution1Storage
});

app.post('/image-solution1-upload', imageSolutionUpload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
})

module.exports = app;