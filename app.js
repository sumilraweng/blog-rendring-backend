// Importing npm install library
const { urlencoded } = require("express");
const express = require("express");

// importing folder
const blogRouter = require("./router/blogsRouter");

//Inatialization the  varaible
const PORT = 3000;
const app = express();

//Using the middleware
app.use(urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
