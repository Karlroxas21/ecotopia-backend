const express = require("express");
const Solution1 = require("../../../model/solutions/solution-1.model");

const app = express();

app.put("/admin-solution-1/:id", async (req, res) => {
  try {
    const upstream_data = await Solution1.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solution-1", async (req, res) => {
  try {
    const y_should_we_take_action = await Solution1.find();
    res.json(y_should_we_take_action);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;