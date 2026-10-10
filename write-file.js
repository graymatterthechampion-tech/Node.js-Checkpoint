const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "welcome.txt");

fs.writeFile(filePath, "Hello Node", "utf8", (error) => {
  if (error) {
    console.error("Could not create welcome.txt:", error.message);
    return;
  }
  console.log("welcome.txt created");
});