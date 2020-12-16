// importing inbuilt file
const { query } = require("express");
const database = require("../models/blogModels");
const Blog = require("../models/BlogConstructor");
const uniqid = require("uniqid");

const blogFilter = (blogArrayData, query) => {};

module.exports.getAllBlog = (req, res) => {
  const jsonData = database.readFile();
  const keys = Object.keys(req.query);
  console.log(req.query);
  if (keys.length) {
    const data = jsonData.filter((blog) => {
      return keys.every((property) => {
        return blog[property] == req.query[property];
      });
    });

    res.json(data);
    console.log("data-->", data);
  } else {
    res.json(database.readFile());
  }
};

module.exports.getBlogById = (req, res) => {
  const data = database.readFile();
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
};

module.exports.createBlog = (req, res) => {
  let jsonBlogData = database.readFile();

  for (i in req.body.links) {
    req.body.links[i].id = uniqid();
  }

  const blogObject = new Blog(
    req.body.author,
    req.body.title,
    req.body.content,
    req.body.links,
    req.body.imageUrl
  );

  jsonBlogData.push(blogObject);
  const err = database.writeFile(jsonBlogData);
  if (err) {
    res.status(500).json({
      status: "Internal Error",
    });
  } else {
    res.status(200).json({
      status: "sucessfull",
      data: blogObject,
    });
  }
};
