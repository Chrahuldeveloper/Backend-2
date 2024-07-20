const express = require("express");
const LoginRoute = express.Router();
const users = require("../models/UserSignup.js");

LoginRoute.get("/", async (req, res) => {
  res.send("login page");
});

LoginRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email: email, password: password });
  if (user) {
    res.status(200).send(user);
  }
  res.status(404).send("User Not found");
});

module.exports = LoginRoute;
