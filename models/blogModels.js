const path = require("path");
const fs = require("fs");

class BlogModel {
  constructor() {
    this.fileName = path.join(__dirname, "..", "DATA", "blog.json");
  }
  readFile() {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  }
  writeFile(data) {
    fs.writeFile(this.fileName, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        return err;
      }
    });
  }
}
module.exports = new BlogModel();
