require('dotenv').config();

const express = require("express");
const multer = require('multer');

const Solution3 = require("../../../model/solutions/solution-3.model");

const app = express();
app.put("/admin-solution-3/:id", async (req, res) => {
  try {
    const upstream_data = await Solution3.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solution-3", async (req, res) => {
  try {
    const responding_to_climate_change = await Solution3.find();
    res.json(responding_to_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload
const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageSolution3Storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}solutionsimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'plants.webp')
  }
});

const imageSolutionUpload = multer({
  storage: imageSolution3Storage
});

app.post('/image-solution3-upload', imageSolutionUpload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
});
module.exports = app;