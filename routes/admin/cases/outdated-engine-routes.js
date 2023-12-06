require('dotenv').config();

const express = require("express");
const OutDatedEngineModel = require("../../../model/cases/outdated_engine.model");
const multer = require('multer');

const app = express();

app.put("/admin-case-2/:id", async (req, res) => {
  try {
    const upstream_data = await OutDatedEngineModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-case-2", async (req, res) => {
  try {
    const outdated_engine = await OutDatedEngineModel.find();
    res.json(outdated_engine);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Image upload
const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

const imageCase2Storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}casesimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'image_case2.webp');
  }
});

const imageCase2Upload = multer({
  storage: imageCase2Storage,
  limits: 100 * 1024 // 100kb
});

app.post('/image-case2-upload', imageCase2Upload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
})

module.exports = app;