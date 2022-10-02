const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
const contentType = "text/html";

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "404.html", (err, content) => {
            if (err) throw err;
            res.writeHead({ "Content-Type": contentType });
            res.end(content, "utf8");
          })
        );
      } else {
        res.writeHead(500);
        res.end(content, "utf8");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf8");
  });
});

app.get("/contact", (req, res) => {
  const filePath = path.join(__dirname, "contact.html");

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf8");
  });
});

app.listen(PORT, () => {
  console.log(`Express rewrite on port ${port}`);
});
