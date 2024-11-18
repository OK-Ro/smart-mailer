import React from "react";
import styled from "styled-components";

// Sticky Note Styled Component with New Design
const TotalEmailsSection = styled.div`
  background-color: #f9f8e6; /* Soft Off-White Color */
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1); /* Softer, more modern shadow */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 320px; /* Increased max-width for a better layout */
  transform: rotate(-2deg);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Hover effect to make it look more interactive */
  &:hover {
    transform: rotate(-4deg);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

// Title of the Component with More Emphasis
const Title = styled.h2`
  color: #2c3e50; /* Dark Blue */
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
`;

// Count of Total Emails with a Bigger Emphasis
const Count = styled.h3`
  color: #e74c3c; /* Red Color for Emphasis */
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 2px; /* Spaced out for visual impact */
  text-align: center;
`;

// Description with a Cleaner, Smaller Font
const Description = styled.p`
  color: #34495e; /* Darker Gray */
  font-size: 1.1rem;
  text-align: center;
  max-width: 250px;
  margin-top: 10px;
  line-height: 1.5;
`;

// The Main Component that will display the Total Emails Section
const TotalMails = () => {
  return (
    <TotalEmailsSection>
      <Title>Total Emails</Title>
      <Count>1000</Count>
      <Description>
        Track the total number of emails sent and received in your system. Keep
        an eye on your inbox's activity.
      </Description>
    </TotalEmailsSection>
  );
};

export default TotalMails;
