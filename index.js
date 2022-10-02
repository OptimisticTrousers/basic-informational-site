const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {});

app.get("/about", (req, res) => {});

app.get("/contact", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Express rewrite on port ${port}`);
});
