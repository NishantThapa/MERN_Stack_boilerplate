const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// create auth controller
module.exports = {
  REGISTER: async (req, res) => {
    console.log("registering user======>", req.body);
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check if user already exists
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists)
      return res.status(400).json({ error: "Email already exists" });
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // create new user
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      // save user to db
      const savedUser = await user.save();
      // assign a token to user
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "5 days",
      });
      res.header("auth-token", token).json({ token });
    } catch (err) {
      res.status(400).json({err});
    }
  },
  LOGIN: async (req, res) => {
    console.log("Login user======>", req.body);
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: "Email is not found" });
    // check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({ error: "Invalid password" });
    // create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5 days",
    });
    res.header("auth-token", token).json({ token });
  },
  AUTHENTICATE: async (req, res) => {
    console.log("Authenticating user======>", req);
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  },
};
