const express = require("express");
const { checkRequestBody } = require("../middleware/blogPostverify");
const {
  getAllBlog,
  getBlogById,
  createBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/").get(getAllBlog).post(checkRequestBody, createBlog);
router.route("/:id").get(getBlogById);

module.exports = router;
