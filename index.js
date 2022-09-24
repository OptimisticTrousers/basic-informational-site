const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  // const filePath = path.join(__dirname, "public")

  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  let extname = path.extname(filePath);

  let contentType = "text/html";

});
const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
