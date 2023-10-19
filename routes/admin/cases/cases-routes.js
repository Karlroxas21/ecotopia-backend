const express = require("express");
const Cases = require("../../../model/cases/cases.model");

const app = express();

app.put("/admin-cases/:id", async (req, res) => {
  try {
    const cases = await Cases.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.send(cases);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-cases", async (req, res) => {
  try {
    const cases = await Cases.find();
    res.json(cases);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;