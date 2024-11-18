import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const EmailDemoContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  background: linear-gradient(to bottom right, #e0f7fa, #fce4ec);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const EmailForm = styled(motion.div)`
  position: absolute;
  top: 15%;
  left: 16%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  text-align: center;
  border: 2px solid #3498db;
`;

const GradientHeading = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffa751 0%, #d4145a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EmailButton = styled(motion.button)`
  background: linear-gradient(135deg, #3498db, #8e44ad);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 1.2rem;
  font-size: 0.8rem;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }
`;

const SendingAnimation = styled(motion.div)`
  position: absolute;
  top: 15%;
  left: 15%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationCircle = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: linear-gradient(to right, #4f8bd8, #b36adf);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(10px);
`;

const IconWrapper = styled.div`
  background: linear-gradient(to right, #3498db, #9b59b6);
  border-radius: 50%;
  padding: 12px;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProcessSteps = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
`;

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  & > span {
    font-size: 16px;
    color: ${({ isActive }) => (isActive ? "#3498db" : "#ccc")};
  }
`;

const EmailDemo = () => {
  return (
    <EmailDemoContainer>
      {/* Email Form */}
      <EmailForm
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
      >
        <GradientHeading>Compose Email</GradientHeading>
        <EmailInput type="email" placeholder="Recipient Email" required />
        <EmailInput type="text" placeholder="Subject" required />
        <EmailInput type="text" placeholder="Message" required />
        <EmailButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Send Email
        </EmailButton>
      </EmailForm>

      {/* Sending Animation */}
      <SendingAnimation
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 1, 0],
          x: [-50, 0, 50],
          y: [-50, 0, 50],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        <AnimationCircle
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <IconWrapper>📧</IconWrapper> {/* Replace this with your Mail icon */}
      </SendingAnimation>

      {/* Process Steps */}
      <ProcessSteps>
        <StepIndicator isActive>
          📧 <span>Compose</span>
        </StepIndicator>
        <StepIndicator>
          ➡️ <span>Send</span>
        </StepIndicator>
        <StepIndicator>
          ✅ <span>Delivered</span>
        </StepIndicator>
      </ProcessSteps>
    </EmailDemoContainer>
  );
};

export default EmailDemo;
