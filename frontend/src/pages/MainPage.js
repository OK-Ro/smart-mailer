import React, { useState } from "react";
import styled from "styled-components";
import NewClients from "../components/NewClients";
import Mail from "./Mail";
import Settings from "../components/Settings";

// Sidebar Styles
const MainContainer = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const Sidebar = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  background-color: #2c3e50; /* Dark Blue */
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.div`
  padding: 15px 0;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e; /* Lighter blue */
  }

  ${({ active }) => active && `background-color: #34495e;`}
`;

// Main Content Area Styles
const MainContent = styled.div`
  margin-left: 270px; /* To make space for the sidebar */
  padding: 30px;
  background-color: #ecf0f1; /* Light Gray */
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  overflow-y: auto;
`;

// Section Styles
const Section = styled.div`
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:nth-child(1) {
    grid-column: span 2;
    background-color: #fef3a6; /* Light Yellow */
    border-radius: 32px 0 32px 0;
  }

  &:nth-child(2) {
    grid-row: span 2;
    background-color: #f8c8d0; /* Light Pink */
    border-radius: 16px;
    transform: rotate(-2deg);
  }

  &:nth-child(3) {
    background-color: #c8e6f1; /* Light Blue */
    border-radius: 8px;
  }

  &:nth-child(4) {
    background-color: #f4f0c6; /* Light Greenish Yellow */
    border-radius: 38px 0 38px 0;
  }

  &:nth-child(5) {
    background-color: #f0c5f5; /* Light Lavender */
    border-radius: 8px;
  }

  &:nth-child(6) {
    background-color: #f5f8c5; /* Pale Lemon */
    border-radius: 38px 8px 0 0;
  }
`;

const ClientSection = styled.div`
  height: 70vh;
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: 2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  &:nth-child(2) {
    grid-row: span 2;
    background-color: #f8c8d0; /* Light Pink */
    border-radius: 16px;
    transform: rotate(-2deg);
  }

  &:nth-child(3) {
    background-color: #c8e6f1; /* Light Blue */
    border-radius: 8px;
  }
`;

const Title = styled.h1`
  color: #2c3e50; /* Dark Blue */
  font-size: 1.8rem;
`;

const Description = styled.p`
  color: #34495e;
  font-size: 1.1rem;
  margin-top: 10px;
  font-style: italic;
`;

// Mail Content Component

const MainPage = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <MainContainer>
      {/* Sidebar Section */}
      <Sidebar>
        <SidebarItem
          active={activeMenu === "Dashboard"}
          onClick={() => setActiveMenu("Dashboard")}
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          active={activeMenu === "Mail"}
          onClick={() => setActiveMenu("Mail")}
        >
          Mail
        </SidebarItem>
        <SidebarItem
          active={activeMenu === "Analytics"}
          onClick={() => setActiveMenu("Analytics")}
        >
          Analytics
        </SidebarItem>
        <SidebarItem
          active={activeMenu === "Recent Activity"}
          onClick={() => setActiveMenu("Recent Activity")}
        >
          Recent Activity
        </SidebarItem>
        <SidebarItem
          active={activeMenu === "Settings"}
          onClick={() => setActiveMenu("Settings")}
        >
          Settings
        </SidebarItem>
      </Sidebar>

      {/* Main Content Section */}
      <MainContent>
        {activeMenu === "Dashboard" && (
          <>
            <Section bgColor="#fef3a6">
              <Title>Total Emails</Title>
              <Description>
                Track the total number of emails sent and received in your
                system.
              </Description>
            </Section>

            <ClientSection bgColor="#f8c8d0">
              <Title>New Clients</Title>
              <NewClients />
            </ClientSection>

            <Section bgColor="#c8e6f1">
              <Title>Total Sent</Title>
              <Description>
                Track the total emails sent in the past week or month.
              </Description>
            </Section>

            <Section bgColor="#f4f0c6">
              <Title>Backend Analysis</Title>
              <Description>
                Analyze backend processes and server performance over time.
              </Description>
            </Section>

            <Section bgColor="#f0c5f5">
              <Title>Charts</Title>
              <Description>
                Visualize data trends and performance using interactive charts.
              </Description>
            </Section>

            <Section bgColor="#f5f8c5">
              <Title>Recent Emails</Title>
              <Description>
                Display the most recent emails sent or received in your inbox.
              </Description>
            </Section>
          </>
        )}

        {activeMenu === "Mail" && <Mail />}
        {activeMenu === "Settings" && <Settings />}
      </MainContent>
    </MainContainer>
  );
};

export default MainPage;
