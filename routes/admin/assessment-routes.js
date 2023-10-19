const express = require("express");
const Assessment = require('../../model/assessment/assessment.model');

const app = express();

app.put("/admin-assessment/:id", async (req, res) => {
  try {
    const upstream_data = await Assessment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-assessment", async (req, res) => {
  try {
    const assessment = await Assessment.find();
    res.json(assessment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;