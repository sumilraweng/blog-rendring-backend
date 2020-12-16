module.exports.checkRequestBody = (req, res, next) => {
  let validationArray = ["author", "title", "content", "links", "imageUrl"];
  // checking body
  let checkBodyresult = validationArray.every((key) => {
    return req.body[key];
  });
  if (!checkBodyresult) {
    return res.status(400).json({
      status: "Unsucessfull",
      message: "Invalid Request Body",
    });
  }
  //   checkin empty string
  let checkStringIsEmpty = false;
  ["author", "title", "content", "imageUrl"].forEach((key) => {
    if (req.body[key].trim().length == 0) {
      checkStringIsEmpty = true;
    }
  });
  if (checkStringIsEmpty) {
    return res.status(400).json({
      status: "Unsucessfull",
      message: "Invalid Request Body",
    });
  }
  let checkLinksIsEmpty = false;
  if (req.body["links"].length == 0) {
    return res.status(400).json({
      status: "Unsucessfull",
      message: "Invalid Request Body",
    });
  }

  next();
};
