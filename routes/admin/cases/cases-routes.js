require('dotenv').config();

const express = require("express");
const Cases = require("../../../model/cases/cases.model");
const multer = require('multer');

const app = express();

app.put("/admin-cases/:id", async (req, res) => {
  try {
    const cases = await Cases.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.send(cases);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-cases", async (req, res) => {
  try {
    const cases = await Cases.find();
    res.json(cases);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const upload_directory = process.env.UPLOAD_DIR || '../src/assets/';

// Image upload
const imageCasesStorage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, `${upload_directory}casesimages`);
  },
  filename: (req, file, cb) =>{
    cb(null, 'image_cases.webp');
  }
});

const imageCasesUpload = multer({
  storage: imageCasesStorage,
  limits: 100 * 1024 // 100kb
});

app.post('/image-cases-upload', imageCasesUpload.single('image'), (req, res) =>{
  if(!req.file){
    return res.status(400).json({ error: 'No file uploaded'});
  }

  return res.status(200).send("File uploaded success");
})

module.exports = app;