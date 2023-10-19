const express = require("express");
const CauseClimateChange = require("../../model/cases/cause_climate_change.model");

const app = express();

app.get("/causesofclimatechange", async (req, res) => {
  try {
    const cause_climate_change = await CauseClimateChange.find();
    res.json(cause_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;