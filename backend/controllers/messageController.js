const Message = require("../models/Message");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const sendMessage = async (req, res) => {
  try {
    const { recipientEmail, companyName, ownerName } = req.body;

    // Check for required fields
    if (!recipientEmail || !companyName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const userId = req.user._id; // Retrieve userId from the authenticated user
    const user = await User.findById(userId); // Retrieve user info

    // Create the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create the email body in HTML format
    const emailBody = `
      <html>
      <body>
        <h2>Hello ${ownerName || "Client"},</h2>
        <p>My name is ${user.name}, a passionate web developer based in ${
      user.city
    }. I specialize in creating stunning, user-friendly websites that not only look great but also drive results.</p>
        <p>Ready to elevate your online presence? Click the button below to schedule a call with me:</p>
        <a href="mailto:${recipientEmail}" style="background-color: #FF5722; color: white; padding: 10px; text-decoration: none; border-radius: 5px;">Let's Talk</a>
      </body>
      </html>
    `;

    // Create a new message instance to save in the database
    const newMessage = new Message({
      recipientEmail,
      subject: `Free Website for ${companyName}`,
      body: emailBody, // Save the HTML body
      senderEmail: process.env.EMAIL_USER,
      userId,
      sent: true,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `Free Website for ${companyName}`,
      html: emailBody,
    });

    return res.status(200).json({
      message: "Message sent successfully",
      messageId: savedMessage._id,
    });
  } catch (err) {
    console.error("Error sending message:", err);
    return res
      .status(500)
      .json({ message: "Error sending message", error: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    const formattedMessages = messages.map((message) => ({
      _id: message._id,
      subject: message.subject,
      body: message.body,
      recipientEmail: message.recipientEmail,
      viewed: message.viewed,
      replies: message.replies || [], // Ensure replies is always an array
      createdAt: message.createdAt,
    }));
    res.status(200).json(formattedMessages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Error fetching messages" });
  }
};

// Handle incoming replies
const handleReply = async (req, res) => {
  const {
    from,
    subject,
    "body-plain": replyBody,
    "message-id": originalMessageId,
  } = req.body;

  // Check for required fields
  if (!from || !replyBody || !originalMessageId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create a new message instance for the reply
    const replyMessage = new Message({
      recipientEmail: from,
      subject: subject,
      body: replyBody,
      sent: false, // This is a reply, so it hasn't been sent
      received: true, // Mark as received
      viewed: false,
      replied: true,
    });

    // Save the reply message to the database
    await replyMessage.save();

    return res.status(200).json({ message: "Reply added successfully" });
  } catch (error) {
    console.error("Error adding reply:", error);
    return res
      .status(500)
      .json({ message: "Error adding reply", error: error.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  handleReply,
};
