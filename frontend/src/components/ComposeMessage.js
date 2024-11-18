import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ComposeMessage = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [statusSuccess, setStatusSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ recipient, subject, body }); // Log the data to see what is being sent
    setSending(true);
    setMessageStatus(""); // Clear previous status message
    try {
      await axios.post("http://localhost:5000/api/messages", {
        recipientEmail: recipient,
        subject,
        body,
        sent: false,
      });
      setMessageStatus("Message sent successfully!");
      setStatusSuccess(true);
      setRecipient("");
      setSubject("");
      setBody("");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send message. Please try again.";
      setMessageStatus(errorMessage);
      setStatusSuccess(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <Container>
      <h2>Compose New Email</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Recipient's Email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <TextArea
          placeholder="Message Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <Button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </Form>
      {messageStatus && (
        <StatusMessage success={statusSuccess}>{messageStatus}</StatusMessage>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 40px;
  text-align: center;
  background-color: #f4f7fa;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  height: 200px;
`;

const Button = styled.button`
  padding: 12px 30px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0098a6;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  margin-top: 20px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

export default ComposeMessage;
