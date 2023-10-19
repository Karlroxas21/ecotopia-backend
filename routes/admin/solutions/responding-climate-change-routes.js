const express = require("express");

const Solution3 = require("../../../model/solutions/solution-3.model");

const app = express();
app.put("/admin-solution-3/:id", async (req, res) => {
  try {
    const upstream_data = await Solution3.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solution-3", async (req, res) => {
  try {
    const responding_to_climate_change = await Solution3.find();
    res.json(responding_to_climate_change);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;