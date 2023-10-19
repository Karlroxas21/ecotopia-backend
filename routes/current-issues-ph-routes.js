const express = require("express");
const CurrentIssues = require("../model/current_issues.model");

const app = express();

app.get("/currentIssue", async (req, res) => {
  try {
    const current_issues_ph = await CurrentIssues.find();
    res.json(current_issues_ph);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;