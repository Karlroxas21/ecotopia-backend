const express = require("express");
const OutDatedEngineModel = require("../../../model/cases/outdated_engine.model");

const app = express();

app.put("/admin-case-2/:id", async (req, res) => {
  try {
    const upstream_data = await OutDatedEngineModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(upstream_data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/admin-case-2", async (req, res) => {
  try {
    const outdated_engine = await OutDatedEngineModel.find();
    res.json(outdated_engine);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;