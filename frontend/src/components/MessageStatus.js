import React from "react";

const MessageStatus = ({ message }) => {
  return (
    <div>
      <h3>Message Status</h3>
      <p>Recipient: {message.recipientEmail}</p>
      <p>Company: {message.companyName}</p>
      <p>Status: {message.sent ? "Sent" : "Not Sent"}</p>
      <p>Received: {message.received ? "Yes" : "No"}</p>
      <p>Viewed: {message.viewed ? "Yes" : "No"}</p>
      <p>Replied: {message.replied ? "Yes" : "No"}</p>
    </div>
  );
};

export default MessageStatus;
