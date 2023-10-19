const express = require("express");
const Solution1 = require("../../model/solutions/solution-1.model");

const app = express();

app.get("/whyshouldwetakeactions", async (req, res) => {
  try {
    const y_should_we_take_action = await Solution1.find();
    res.json(y_should_we_take_action);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;