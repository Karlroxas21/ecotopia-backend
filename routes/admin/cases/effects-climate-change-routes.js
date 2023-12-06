require('dotenv').config();

const express = require("express");
const EffectsClimateChange = require("../../../model/cases/effects_climate_change.model");
const multer = require('multer');

const app = express();

app.put("/admin-case-4/:id", async (req, res) => {
  try {
    const upstream_data = await EffectsClimateChange.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-case-4", async (req, res) => {
  try {
    const effects_climate_change = await EffectsClimateChange.find();
    res.json(effects_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload
const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageCase4Storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}casesimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'image_case4.webp');
  }
});

const imageCase4Upload = multer({
  storage: imageCase4Storage,
  limits: 100 * 1024 // 100kb
});

app.post('/image-case4-upload', imageCase4Upload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
});

module.exports = app;