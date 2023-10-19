const express = require("express");
const OutDatedEngineModel = require("../../model/cases/outdated_engine.model");

const app = express();

app.get("/outdatedjeepengine", async (req, res) => {
  try {
    const outdated_engine = await OutDatedEngineModel.find();
    res.json(outdated_engine);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;