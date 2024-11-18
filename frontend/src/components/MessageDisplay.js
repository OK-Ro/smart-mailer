import React from "react";
import ClientReplyForm from "./ClientReplyForm";

const MessageDisplay = ({ message }) => {
  return (
    <div>
      <h3>Message from: {message.recipientEmail}</h3>
      <p>Subject: {message.subject}</p>
      <p>{message.body}</p>
      <p>Status: {message.sent ? "Sent" : "Not Sent"}</p>
      <p>Received: {message.received ? "Yes" : "No"}</p>
      <p>Viewed: {message.viewed ? "Yes" : "No"}</p>
      <p>Replied: {message.replied ? "Yes" : "No"}</p>
      <ClientReplyForm messageId={message._id} />
    </div>
  );
};

export default MessageDisplay;
