const express = require("express");
const ProblemTrash = require("../../model/cases/problem_trash.model");

const app = express();

app.get("/problemtrash", async (req, res) => {
  try {
    const problem_trash = await ProblemTrash.find();
    res.json(problem_trash);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;