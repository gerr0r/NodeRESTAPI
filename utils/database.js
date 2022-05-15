const fs = require("fs");
const path = require("path");

const dbFile = path.join(__dirname, "..", "data", "database.json");

function readData() {
  const data = fs.readFileSync(dbFile, { encoding: "utf-8" });

  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(dbFile, JSON.stringify(data), { encoding: "utf-8" });
}

module.exports = { readData, writeData };
