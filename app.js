const path = require("path");
const fs = require("fs");

const express = require("express");

const PORT = process.env.PORT || 3000;
const fileName = path.join(__dirname, "DATA", "blog.json");
const data = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const app = express();
app.use(express.json());

app.get("/blogs/:id", (req, res) => {
  if (req.params.id) {
    const blog = data.find((user) => {
      return user.id == req.params.id;
    });
    if (blog) {
      res.status(200).json({
        status: "sucessfull",
        data: blog,
      });
    } else {
      res.status(200).json({
        status: "sucessfull",
        data: "blog not found",
      });
    }
  }
});

app.get("/blogs", (req, res) => {
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("<h1> Api to fetch the blogs</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
