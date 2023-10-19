const express = require("express");
const CurrentIssues = require("../../model/current_issues.model");

const app = express();
app.put("/admin-current-issues-ph/:id", async (req, res) => {
  try {
    const upstream_data = await CurrentIssues.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-current-issues-ph", async (req, res) => {
  try {
    const current_issues_ph = await CurrentIssues.find();
    res.json(current_issues_ph);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;