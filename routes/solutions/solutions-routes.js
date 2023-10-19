const express = require("express");
const Solution = require("../../model/solutions/solutions.model");

const app = express();

app.get("/solutions", async (req, res) => {
  try {
    const solutions = await Solution.find();
    res.json(solutions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;