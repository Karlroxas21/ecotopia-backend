const express = require("express");
const Solution2 = require("../../model/solutions/solution-2.model");

const app = express();

app.get("/othersolutions", async (req, res) => {
  try {
    const other_solutions = await Solution2.find();
    res.json(other_solutions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;