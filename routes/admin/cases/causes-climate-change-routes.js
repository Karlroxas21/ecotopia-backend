const express = require("express");
const CauseClimateChange = require("../../../model/cases/cause_climate_change.model");

const app = express();

app.put("/admin-case-3/:id", async (req, res) => {
  try {
    const upstream_data = await CauseClimateChange.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-case-3", async (req, res) => {
  try {
    const causes_climate_change = await CauseClimateChange.find();
    res.json(causes_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;