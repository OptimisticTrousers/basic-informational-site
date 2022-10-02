const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
const contentType = "text/html";

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf8");
  });
});

app.get("/about.html", (req, res) => {
  const filePath = path.join(__dirname, "about.html");

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf8");
  });
});

app.get("/contact-me.html", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf8");
  });
});

app.all("*", async (req, res) => {
  const filePath = path.join(__dirname, "404.html");
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    res.status(404).send(data);
  } catch (err) {
    throw err;
  }
});

app.listen(PORT, () => {
  console.log(`Express rewrite on port ${PORT}`);
});
