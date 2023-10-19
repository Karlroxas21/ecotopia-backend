const express = require("express");
const Assessment = require('../model/assessment/assessment.model');

const app = express();

app.get("/assessment_trivia", async (req, res) => {
  try {
    const assessment = await Assessment.find();
    res.json(assessment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;