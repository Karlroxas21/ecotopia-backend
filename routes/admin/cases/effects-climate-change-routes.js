const express = require("express");
const EffectsClimateChange = require("../../../model/cases/effects_climate_change.model");

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

module.exports = app;