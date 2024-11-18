import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Mail,
  Zap,
  BarChart,
  Lock,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";

const Section = styled.section`
  background: #ffffff;
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #1a365d, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem; /* Reduced gap for mobile devices */
  }
`;

const FeatureCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  height: auto; /* Removed fixed height to ensure responsive resizing */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: #2563eb;
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-bottom: 2rem;
  background: ${(props) => props.color || "#2563eb"};
  box-shadow: 0 8px 16px
    ${(props) => `${props.color}33` || "rgba(37, 99, 235, 0.2)"};

  svg {
    width: 32px;
    height: 32px;
    color: white;
    stroke-width: 2;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const StyledButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const CTA = styled(motion.div)`
  text-align: center;
  margin-top: 8rem;
  padding: 4rem;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #2563eb, transparent);
  }

  @media (max-width: 768px) {
    padding: 3rem; /* Reduced padding for mobile */
    margin-top: 6rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;

  h4 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #2563eb;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
    font-size: 1.1rem;
  }
`;

const features = [
  {
    icon: <Mail />,
    title: "Smart Inbox Management",
    description:
      "AI-powered email categorization and priority sorting to keep your inbox organized effortlessly.",
    color: "#2563eb",
  },
  {
    icon: <Zap />,
    title: "Quick Actions",
    description:
      "One-click responses and automated workflows to handle repetitive tasks instantly.",
    color: "#7c3aed",
  },
  {
    icon: <BarChart />,
    title: "Advanced Analytics",
    description:
      "Detailed insights into your email patterns with actionable recommendations.",
    color: "#059669",
  },
  {
    icon: <Lock />,
    title: "Enterprise Security",
    description:
      "Military-grade encryption and advanced threat detection to protect your communications.",
    color: "#dc2626",
  },
  {
    icon: <Clock />,
    title: "Smart Scheduling",
    description:
      "AI-optimized email delivery times to maximize engagement and response rates.",
    color: "#0891b2",
  },
  {
    icon: <Globe />,
    title: "Global Communication",
    description:
      "Real-time translation and cultural context awareness for international correspondence.",
    color: "#6366f1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function Features() {
  return (
    <Section>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Revolutionize Your Email Experience</Title>
          <Subtitle>
            Harness the power of AI to transform your email workflow and boost
            productivity
          </Subtitle>
        </SectionHeader>

        <Stats>
          <StatItem>
            <h4>99.9%</h4>
            <p>Uptime Guaranteed</p>
          </StatItem>
          <StatItem>
            <h4>50K+</h4>
            <p>Active Users</p>
          </StatItem>
          <StatItem>
            <h4>5M+</h4>
            <p>Emails Processed</p>
          </StatItem>
        </Stats>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  color={feature.color}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <StyledButton whileHover={{ scale: 1.05 }}>
                  Learn More <ArrowRight />
                </StyledButton>
              </FeatureCard>
            ))}
          </Grid>
        </motion.div>

        <CTA
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Title>Ready to elevate your email experience?</Title>
          <StyledButton>
            Get Started <ArrowRight />
          </StyledButton>
        </CTA>
      </Container>
    </Section>
  );
}

export default Features;
