require('dotenv').config();

const express = require("express");
const Solution = require("../../../model/solutions/solutions.model");
const multer = require('multer');

const app = express();
app.put("/admin-solutions/:id", async (req, res) => {
  try {
    const upstream_data = await Solution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solutions", async (req, res) => {
  try {
    const solution = await Solution.find();
    res.json(solution);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload
const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageSolutionStorage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}solutionsimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'actnow.webp');
  }
});

const imageSolutionUpload = multer({
  storage: imageSolutionStorage
});

app.post('/image-solution-upload', imageSolutionUpload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
})


module.exports = app;