// Importing npm install library
const express = require("express");

// importing folder
const blogRouter = require("./router/blogsRouter");

//Inatialization the  varaible
const PORT = 3000;
const app = express();

//Using the middleware
app.use(express.json());
app.use("/", blogRouter);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
