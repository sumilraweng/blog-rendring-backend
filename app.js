// Importing npm install library
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
// importing folder
const blogRouter = require("./router/blogsRouter");

//Inatialization the  varaible
const PORT = process.env.PORT || 3000;
const app = express();

//Using the middleware
app.use(cors());
app.use(express.json());
app.use("/", blogRouter);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
