import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MessagesContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const MessageItem = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isReply ? "flex-start" : "flex-end")};
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 20px;
  color: white;
  background-color: ${(props) => (props.isReply ? "#007BFF" : "#4CAF50")};
  margin: 5px;
  position: relative;
  word-wrap: break-word;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  color: #ffffff;
`;

const MessageSubject = styled.h3`
  margin: 0;
  color: #ffffff;
`;

const MessagePreview = styled.p`
  color: #ffffff;
  margin: 0;
`;

const FullMessageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;

  &:hover {
    background-color: #c0392b;
  }
`;

const ViewMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

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

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
  };

  return (
    <MessagesContainer>
      <h2>Your Messages</h2>
      {messages.map((message) => (
        <MessageItem
          key={message._id}
          isReply={message.replied}
          onClick={() => handleMessageClick(message)}
        >
          <MessageBubble isReply={message.replied}>
            <MessageHeader>
              <MessageSubject>{message.subject}</MessageSubject>
              <span>{new Date(message.createdAt).toLocaleString()}</span>
            </MessageHeader>
            <MessagePreview>
              {message.body.replace(/<[^>]+>/g, "").substring(0, 50)}...
            </MessagePreview>
          </MessageBubble>
        </MessageItem>
      ))}
      {selectedMessage && (
        <FullMessageModal>
          <ModalContent>
            <h3>{selectedMessage.subject}</h3>
            <p>{selectedMessage.body.replace(/<[^>]+>/g, "")}</p>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          </ModalContent>
        </FullMessageModal>
      )}
    </MessagesContainer>
  );
};

export default ViewMessages;
