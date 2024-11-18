"use client";

import { motion } from "framer-motion";
import { Lightbulb, Send, Inbox, Zap } from "lucide-react";
import styled from "styled-components";

const steps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Smart Composition",
    description:
      "Start typing and watch as AI suggests completions based on your writing style and context.",
  },
  {
    icon: <Send className="h-8 w-8 text-blue-500" />,
    title: "Intelligent Delivery",
    description:
      "Our system analyzes recipient behavior to schedule your email for optimal engagement times.",
  },
  {
    icon: <Inbox className="h-8 w-8 text-green-500" />,
    title: "Automated Organization",
    description:
      "Incoming emails are automatically categorized and prioritized for effortless inbox management.",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Continuous Learning",
    description:
      "The AI adapts to your preferences over time, constantly improving your email experience.",
  },
];

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(to bottom, #ffffff, #e0f7fa);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #4b5563;
  max-width: 800px;
  margin: 0 auto;
`;

const StepGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 48px;
`;

const StepIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #bfdbfe;
  margin-right: 16px;
`;

const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

const StepDescription = styled.p`
  color: #4b5563;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, transparent, white);
  opacity: 0.5;
`;

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header>
            <Title>How EmailComplete Works</Title>
            <Description>
              Experience a seamless email workflow powered by cutting-edge AI
              technology. Here's how EmailComplete revolutionizes your
              communication:
            </Description>
          </Header>
        </motion.div>

        <StepGrid>
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Step>
                  <StepIconWrapper>{step.icon}</StepIconWrapper>
                  <div>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </div>
                </Step>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ImageWrapper>
              <img
                src="https://cdn.dribbble.com/userupload/11916467/file/original-3698d93b78dc500497e1ba7ea9012231.png?resize=1504x1128"
                alt="EmailComplete Interface"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <GradientOverlay />
            </ImageWrapper>
          </motion.div>
        </StepGrid>
      </Container>
    </Section>
  );
}
