const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Debugging log to check if the MongoDB URI is loaded correctly
console.log("MongoDB URI:", process.env.MONGODB_URI);

app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use(errorHandler);

// Database Connection (MongoDB)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Keep this option for backward compatibility
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Simple Route (Test if the server is working)
app.get("/", (req, res) => {
  const speed = Math.random() * 100; // Random speed between 0 and 100 Mbps
  res.json({ message: "Smart Mailer Backend is Running!", speed });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
