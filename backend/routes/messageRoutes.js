const express = require("express");
const auth = require("../middleware/auth");
const {
  sendMessage,
  getMessages,
  handleReply,
} = require("../controllers/messageController");

const router = express.Router();

// Route to send message
router.post("/send", auth, sendMessage);

// Route to get messages for the authenticated user
router.get("/", auth, getMessages);

// Route to handle incoming replies
router.post("/reply", handleReply);

module.exports = router;
