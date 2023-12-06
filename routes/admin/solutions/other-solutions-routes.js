require('dotenv').config();

const express = require("express");
const Solution2 = require("../../../model/solutions/solution-2.model");
const multer = require('multer');

const app = express();
app.put("/admin-solution-2/:id", async (req, res) => {
  try {
    const upstream_data = await Solution2.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solution-2", async (req, res) => {
  try {
    const other_solutions = await Solution2.find();
    res.json(other_solutions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload

const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageSolution2Storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}solutionsimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'solutions.webp');
  }
});

const imageSolutionUpload = multer({
  storage: imageSolution2Storage
});

app.post('/image-solution2-upload', imageSolutionUpload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
})


module.exports = app;