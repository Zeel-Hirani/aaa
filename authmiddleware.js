// const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const accessTokenSecret = "youraccesstokensecret";

const protect = async (req, res, next) => {
  
  let token = req.headers["authorization"] || req.headers["x-access-jwtToken"];

  if (!token) {
    return res
      .status(403)
      .send({ status: false, message: "No token provided", data: "" });
  } else {
    token = token.replace(/^Bearer\s+/, "");
  }

  jwt.verify(token, process.env.JWT_SECRET || accessTokenSecret, (err, user) => {
    if (err) {

      return res.status(200).send({
        
        status: false,
        message: "Failed to authenticate token.",
        data: "",
        
      });
    }
    req.user = user;
    req.user = user.id
    next();
  });
}

  module.exports = { protect };