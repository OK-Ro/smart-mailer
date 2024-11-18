import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SendMailContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50; /* Dark Blue */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db; /* Light Blue */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9; /* Darker Blue */
  }
`;

const SendMail = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const handleSendMail = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/messages/send",
        {
          recipientEmail,
          companyName,
          ownerName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <SendMailContainer>
      <Title>Send Mail</Title>
      <form onSubmit={handleSendMail}>
        <Input
          type="email"
          placeholder="Recipient Email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Owner Name (Optional)"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <Button type="submit">Send Email</Button>
      </form>
    </SendMailContainer>
  );
};

export default SendMail;
