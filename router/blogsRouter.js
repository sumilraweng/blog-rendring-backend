const express = require("express");
const { checkRequestBody } = require("../middleware/blogPostverify");
const {
  getAllBlog,
  getBlogById,
  createBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("<h1> Api to fetch the blogs</h1>");
});
router.route("/blogs").get(getAllBlog).post(checkRequestBody, createBlog);
router.route("/blogs/:id").get(getBlogById);

module.exports = router;
