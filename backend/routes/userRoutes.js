const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
require("dotenv").config();

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// User Login
router.post("/login", async (req, res) => {
  console.log("Login attempt:", req.body);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).send({ error: "Invalid login credentials" });
  }
});

// Get user profile
router.get("/me", auth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
