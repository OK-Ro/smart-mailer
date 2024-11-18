import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalOverlay = styled.div`
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
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 90%;
  max-width: 400px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
  color: #2c3e50; /* Dark Blue */
`;

const ModalDescription = styled.p`
  margin-bottom: 20px;
  color: #34495e; /* Darker Gray */
`;

const ModalButton = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #3498db; /* Light Blue */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9; /* Darker Blue */
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e74c3c; /* Red */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b; /* Darker Red */
  }
`;

const StartModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Get Started</ModalTitle>
        <ModalDescription>
          Please choose an option to continue:
        </ModalDescription>
        <ModalButton to="/login">Login</ModalButton>
        <ModalButton to="/register">Register</ModalButton>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default StartModal;
