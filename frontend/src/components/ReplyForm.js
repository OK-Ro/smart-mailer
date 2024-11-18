import React, { useState } from "react";
import axios from "axios";

const ReplyForm = ({ messageId }) => {
  const [replyBody, setReplyBody] = useState("");

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get the token from local storage
    try {
      const response = await axios.post(
        "/api/messages/reply",
        { messageId, replyBody },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setReplyBody(""); // Clear the input after sending
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply.");
    }
  };

  return (
    <form onSubmit={handleReplySubmit}>
      <textarea
        placeholder="Type your reply here..."
        value={replyBody}
        onChange={(e) => setReplyBody(e.target.value)}
        required
      />
      <button type="submit">Send Reply</button>
    </form>
  );
};

export default ReplyForm;
