import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const MailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f2f5;
`;

const MailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
`;

const Button = styled.button`
  background-color: #34495e;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #5d6d7e;
  }
`;

const MailList = styled.div`
  margin-top: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const MailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const MailContent = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ComposeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

// Main Mail Component
const Mail = () => {
  const [selectedTab, setSelectedTab] = useState("inbox");
  const [emails, setEmails] = useState([
    {
      id: 1,
      subject: "Meeting Tomorrow",
      sender: "John",
      body: "Reminder about our meeting.",
    },
    {
      id: 2,
      subject: "Project Update",
      sender: "Mary",
      body: "Here's the project update.",
    },
    // Add more email data as needed
  ]);
  const [composeData, setComposeData] = useState({ subject: "", body: "" });
  const [isComposing, setIsComposing] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleComposeChange = (e) => {
    setComposeData({
      ...composeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Here you would typically call an API to send the email
    const newEmail = {
      id: emails.length + 1,
      subject: composeData.subject,
      sender: "You",
      body: composeData.body,
    };
    setEmails([...emails, newEmail]);
    setIsComposing(false);
    setComposeData({ subject: "", body: "" });
  };

  const handleDeleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  const renderEmails = () => {
    return emails
      .filter((email) => (selectedTab === "inbox" ? true : false)) // Filter based on selected tab
      .map((email) => (
        <MailItem key={email.id}>
          <div>{email.sender}</div>
          <div>{email.subject}</div>
          <div>{email.body.slice(0, 20)}...</div>
          <Button onClick={() => handleDeleteEmail(email.id)}>Delete</Button>
        </MailItem>
      ));
  };

  return (
    <MailContainer>
      {/* Mail Header */}
      <MailHeader>
        <Button onClick={() => handleTabChange("inbox")}>Inbox</Button>
        <Button onClick={() => handleTabChange("sent")}>Sent</Button>
        <Button onClick={() => handleTabChange("trash")}>Trash</Button>
        <Button onClick={() => setIsComposing(!isComposing)}>Compose</Button>
      </MailHeader>

      {/* Compose Form */}
      {isComposing && (
        <ComposeForm onSubmit={handleSendEmail}>
          <InputField
            type="text"
            name="subject"
            value={composeData.subject}
            onChange={handleComposeChange}
            placeholder="Subject"
            required
          />
          <TextArea
            name="body"
            value={composeData.body}
            onChange={handleComposeChange}
            placeholder="Body"
            required
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </ComposeForm>
      )}

      {/* Mail List (Inbox/Sent/Trash) */}
      <MailList>{renderEmails()}</MailList>

      {/* Mail Content (email details can be shown when selected) */}
      <MailContent>
        {/* Placeholder for detailed email content */}
        {/* You can implement a modal or expanded view for detailed email reading */}
      </MailContent>
    </MailContainer>
  );
};

export default Mail;
