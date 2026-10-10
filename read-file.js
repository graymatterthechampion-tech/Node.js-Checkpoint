const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "welcome.txt");

fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    if (error.code === "ENOENT") {
      console.error("welcome.txt not found. Run: node write-file.js first");
    } else {
      console.error("Could not read welcome.txt:", error.message);
    }
    return;
  }
  console.log(data);
});