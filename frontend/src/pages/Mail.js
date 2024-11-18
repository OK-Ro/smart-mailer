import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Inbox,
  Send,
  Trash2,
  Star,
  AlertCircle,
  Plus,
  Search,
  ChevronDown,
  Paperclip,
  X,
} from "lucide-react";

const mailboxes = [
  { icon: <Inbox />, name: "Inbox", count: 24, color: "#3b82f6" },
  { icon: <Send />, name: "Sent", count: 5, color: "#22c55e" },
  { icon: <Star />, name: "Starred", count: 3, color: "#eab308" },
  { icon: <AlertCircle />, name: "Spam", count: 1, color: "#ef4444" },
  { icon: <Trash2 />, name: "Trash", count: 8, color: "#6b7280" },
];

const emails = [
  {
    id: 1,
    from: "John Doe",
    subject: "Project Update",
    preview: "Hi, I wanted to give you an update on...",
    date: "10:30 AM",
    color: "#8b5cf6",
  },
  {
    id: 2,
    from: "Jane Smith",
    subject: "Meeting Reminder",
    preview: "Don't forget about our meeting at 2 PM...",
    date: "Yesterday",
    color: "#ec4899",
  },
  {
    id: 3,
    from: "Alex Johnson",
    subject: "New Feature Proposal",
    preview: "I have an idea for a new feature that...",
    date: "Mon",
    color: "#6366f1",
  },
];

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f3f4f6;
`;

const Sidebar = styled(motion.div)`
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const ComposeButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const MailboxButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.selected ? "#f3f4f6" : "transparent")};
  border: none;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  margin-right: 0.75rem;
`;

const MailboxName = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const MailboxCount = styled.span`
  background-color: #e5e7eb;
  color: #4b5563;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 32rem;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
  }
`;

const Avatar = styled(motion.div)`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const EmailList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;

const EmailItem = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
  overflow: hidden;
`;

const EmailContent = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const EmailAvatar = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 1rem;
`;

const EmailDetails = styled.div`
  flex-grow: 1;
`;

const EmailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const From = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const Date = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Subject = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`;

const Preview = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 32rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ModalBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  min-height: 200px;
  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SendButton = styled(motion.button)`
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const AttachButton = styled(motion.button)`
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default function Mail() {
  const [selectedMailbox, setSelectedMailbox] = useState("Inbox");
  const [composeOpen, setComposeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Container>
      <Sidebar
        initial={false}
        animate={{ width: isSidebarOpen ? "auto" : "0" }}
      >
        <div style={{ padding: "1rem" }}>
          <ComposeButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setComposeOpen(true)}
          >
            <Plus size={20} style={{ marginRight: "0.5rem" }} /> Compose
          </ComposeButton>
        </div>
        <nav>
          {mailboxes.map((mailbox) => (
            <MailboxButton
              key={mailbox.name}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMailbox(mailbox.name)}
              selected={selectedMailbox === mailbox.name}
            >
              <IconWrapper color={mailbox.color}>{mailbox.icon}</IconWrapper>
              <MailboxName>{mailbox.name}</MailboxName>
              <MailboxCount>{mailbox.count}</MailboxCount>
            </MailboxButton>
          ))}
        </nav>
      </Sidebar>

      <MainContent>
        <Header>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <ChevronDown
              size={24}
              style={{
                transform: isSidebarOpen ? "rotate(0deg)" : "rotate(-90deg)",
                transition: "transform 0.3s",
              }}
            />
          </motion.button>
          <div
            style={{
              position: "relative",
              flexGrow: 1,
              maxWidth: "32rem",
              margin: "0 1rem",
            }}
          >
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
              }}
            />
            <SearchInput
              type="text"
              placeholder="Search emails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Avatar whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            JD
          </Avatar>
        </Header>

        <EmailList>
          <AnimatePresence>
            {emails.map((email, index) => (
              <EmailItem
                key={email.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <EmailContent>
                  <EmailAvatar
                    whileHover={{ scale: 1.1 }}
                    style={{ backgroundColor: email.color }}
                  >
                    {email.from[0]}
                  </EmailAvatar>
                  <EmailDetails>
                    <EmailHeader>
                      <From>{email.from}</From>
                      <Date>{email.date}</Date>
                    </EmailHeader>
                    <Subject>{email.subject}</Subject>
                    <Preview>{email.preview}</Preview>
                  </EmailDetails>
                </EmailContent>
              </EmailItem>
            ))}
          </AnimatePresence>
        </EmailList>
      </MainContent>

      <AnimatePresence>
        {composeOpen && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <ModalHeader>
                <ModalTitle>New Message</ModalTitle>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setComposeOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <X size={24} />
                </motion.button>
              </ModalHeader>
              <ModalBody>
                <Input type="text" placeholder="To" />
                <Input type="text" placeholder="Subject" />
                <Textarea placeholder="Compose your email..." />
                <ButtonGroup>
                  <SendButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send <Send size={16} style={{ marginLeft: "0.5rem" }} />
                  </SendButton>
                  <AttachButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Paperclip size={20} style={{ marginRight: "0.5rem" }} />{" "}
                    Attach
                  </AttachButton>
                </ButtonGroup>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
}
