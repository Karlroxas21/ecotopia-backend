const express = require("express");
const Solution = require("../../../model/solutions/solutions.model");

const app = express();
app.put("/admin-solutions/:id", async (req, res) => {
  try {
    const upstream_data = await Solution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solutions", async (req, res) => {
  try {
    const solution = await Solution.find();
    res.json(solution);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;