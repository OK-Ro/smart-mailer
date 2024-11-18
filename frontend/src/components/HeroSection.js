import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EmailDemo from "./EmailDemo";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/register");
  };

  return (
    <HeroContainer>
      <BackgroundDesign />
      <ContentWrapper>
        <TextColumn
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Title>
            <span>Professional Email</span>
            <span className="highlight">Made Simple</span>
          </Title>
          <Description>
            Create and send professional emails with AI-powered assistance. Save
            time and maintain consistency in your communications.
          </Description>
          <Button onClick={handleGetStartedClick}>Get Started Free</Button>
        </TextColumn>
        <ImageColumn
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <EmailDemoWrapper>
            <EmailDemo />
          </EmailDemoWrapper>
        </ImageColumn>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

// Styled Components

const HeroContainer = styled.div`
  background-color: white;
  padding-top: 1rem;
  position: relative;
`;

const BackgroundDesign = styled.div`
  position: absolute;
  top: -6rem;
  left: 60rem;
  width: 120%;
  height: 150vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffa751 30%, #d4145a 100%);
  border: 1px solid #d4145a;
  -webkit-clip-path: polygon(63% 0, 50% 0, 100% 5%, 2% 64%);
  clip-path: polygon(15% 0, 100% 0, 65% 0, 2% 64%);
  z-index: 1;
  animation: gradientAnimation 20s ease-in-out infinite;

  @keyframes gradientAnimation {
    0% {
      background: linear-gradient(135deg, #ffa751 30%, #d4145a 100%);
    }
    25% {
      background: linear-gradient(135deg, #d4145a 30%, #ff8c00 100%);
    }
    50% {
      background: linear-gradient(135deg, #ff8c00 30%, #8e2de2 100%);
    }
    75% {
      background: linear-gradient(135deg, #8e2de2 30%, #d4145a 100%);
    }
    100% {
      background: linear-gradient(135deg, #ffa751 30%, #d4145a 100%);
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 4rem 1rem;
    gap: 2rem;
  }
`;

const TextColumn = styled(motion.div)`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1.2;

  .highlight {
    color: #2563eb;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #6b7280;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  margin-top: 1.25rem;
  padding: 1rem 3rem;
  background: linear-gradient(135deg, #e74c3c 0%, #f39c12 100%);
  border-radius: 1.2rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid #e74c3c;

  &:hover {
    background-color: #1e40af;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem;
  }
`;

const ImageColumn = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailDemoWrapper = styled.div`
  width: 35vw;
  height: 54vh;
  background-color: #e5e7eb;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: auto;

  @media (max-width: 768px) {
    width: 80vw;
    height: 50vh;
    border-radius: 1rem;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 40vh;
  }
`;
