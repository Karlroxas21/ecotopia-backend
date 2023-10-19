const express = require("express");
const Solution2 = require("../../../model/solutions/solution-2.model");

const app = express();
app.put("/admin-solution-2/:id", async (req, res) => {
  try {
    const upstream_data = await Solution2.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-solution-2", async (req, res) => {
  try {
    const other_solutions = await Solution2.find();
    res.json(other_solutions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;