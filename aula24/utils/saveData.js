const fs = require("fs");
const path = require("path");

const saveData = (array, file) => {
  let dataString = JSON.stringify(array);
  let filePath = path.join("data", file);

  fs.writeFileSync(filePath, 'module.exports = ');
  fs.appendFileSync(filePath, dataString);
}

module.exports = saveData