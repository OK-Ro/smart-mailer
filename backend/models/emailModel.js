const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  recipientEmail: String,
  companyName: String,
  ownerName: String,
  yourName: String,
  city: String,
  phoneNumber: String,
  website: String,
  subject: String,
  emailBody: String,
  sentAt: {
    type: Date,
    default: Date.now,
  },
  followUpStatus: {
    type: String,
    enum: ["pending", "followed-up", "closed"],
    default: "pending",
  },
  followUpDate: Date,
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
