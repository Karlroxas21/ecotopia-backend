const express = require("express");
const EffectsClimateChange = require("../../model/cases/effects_climate_change.model");

const app = express();

app.get("/effectsofclimatechange", async (req, res) => {
  try {
    const effect_climate_change = await EffectsClimateChange.find();
    res.json(effect_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;