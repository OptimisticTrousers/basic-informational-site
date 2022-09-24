const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
});
const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
