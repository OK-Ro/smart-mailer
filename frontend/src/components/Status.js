import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StatusContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const StatusItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f4f4f4; /* Light Gray */
  }
`;

const StatusSubject = styled.h3`
  margin: 0;
  color: #2c3e50; /* Dark Blue */
`;

const StatusMeta = styled.p`
  margin: 0;
  color: #7f8c8d; /* Gray */
  font-size: 12px;
`;

const StatusHeader = styled.h2`
  text-align: center;
  color: #2c3e50; /* Dark Blue */
`;

const Status = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://smart-mailer.onrender.com/api/messages",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <StatusContainer>
      <StatusHeader>Email Status</StatusHeader>
      {messages.map((message) => (
        <StatusItem key={message._id}>
          <StatusSubject>{message.subject}</StatusSubject>
          <StatusMeta>
            {message.viewed ? "Viewed" : "Not Viewed"} |{" "}
            {message.replies && message.replies.length
              ? message.replies.length
              : 0}{" "}
            Replies
          </StatusMeta>
        </StatusItem>
      ))}
    </StatusContainer>
  );
};

export default Status;
