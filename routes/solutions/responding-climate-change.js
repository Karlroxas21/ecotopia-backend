const express = require("express");

const Solution3 = require("../../model/solutions/solution-3.model");

const app = express();

app.get("/respondingtoclimatechange", async (req, res) => {
  try {
    const responding_to_climate_change = await Solution3.find();
    res.json(responding_to_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;