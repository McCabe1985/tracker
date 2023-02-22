const express = require("express");
const loads = require("./data/loads");
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/loads", (req, res) => {
  res.json(loads);
});

app.get("/api/loads/:id", (req, res) => {
  const load = loads.find((l) => l._id === req.params.id);
  res.json(load);
});

app.listen(5000, console.log("server running"));
