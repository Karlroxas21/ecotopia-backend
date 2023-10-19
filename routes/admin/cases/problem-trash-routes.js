const express = require("express");
const ProblemTrash = require("../../../model/cases/problem_trash.model");

const app = express();

app.put("/admin-cases-problemtrash/:id", async (req, res) => {
  try {
    const upstream_data = await ProblemTrash.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-cases-problemtrash", async (req, res) => {
  try {
    const problem_trash = await ProblemTrash.find();
    res.json(problem_trash);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;