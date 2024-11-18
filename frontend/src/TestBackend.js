import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { testBackendConnection } from "./utils/api";
import { FaNetworkWired, FaExclamationTriangle } from "react-icons/fa";

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00ff00, 0 0 40px #00ff00; }
  100% { box-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00ff00, 0 0 50px #00ff00; }
`;

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ServerIndicator = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${(props) =>
    props.isRunning
      ? "linear-gradient(45deg, #00ff00, #00e676)"
      : "linear-gradient(45deg, #ff3d00, #ff1744)"};
  animation: ${(props) =>
    props.isRunning
      ? css`
          ${pulseAnimation} 1.5s infinite alternate, ${glowAnimation} 2s infinite alternate
        `
      : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  position: fixed;
  top: 40px;
  right: 50px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const SpeedBar = styled.div`
  position: fixed;
  top: 40px;
  right: 140px;
  width: 10px;
  height: 50px;
  background: linear-gradient(180deg, #00ff00, #ff0000);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 5;
  border: 1px solid white;
`;

const SpeedLevel = styled.div`
  width: 100%;
  height: ${(props) => props.level}%;
  background-color: #00ff00;
  transition: height 0.3s ease;
`;

const SpeedText = styled.div`
  position: fixed;
  top: 40px;
  right: 160px;
  font-size: 13px;
  color: #fff;
  font-weight: 800;
  transition: color 0.3s ease, transform 0.3s ease;
  background: ${(props) =>
    props.speed > 0
      ? "linear-gradient(135deg, #00ff00, #4caf50)"
      : "linear-gradient(135deg, #ff0000, #ff3d00)"};
  padding: 10px;
  border-radius: 8px;
  z-index: 5;
  border: 2px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 240px;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: #333;
  text-align: center;
  border-radius: 12px;
  padding: 12px;
  position: absolute;
  font-size: 0.9rem;
  z-index: 1;
  top: 110%;
  left: 50%;
  margin-left: -120px;
  opacity: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  ${ServerIndicator}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fad0c4 transparent;
  }
`;

const Icon = styled.div`
  font-size: 18px;
`;

const StatusBar = styled.div`
  position: fixed;
  top: 39px;
  right: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

const StatusIndicator = styled.div`
  width: 10px;
  height: 23px;
  border-radius: 20px;
  z-index: 1000;
  background-color: ${(props) => (props.active ? "#ff9800" : "#ccc")};
  margin: 2px 0;
  transition: background-color 0.3s ease;
  animation: ${(props) =>
    props.active
      ? css`
          ${blinkAnimation} 1s infinite
        `
      : "none"};
`;

const TestBackend = () => {
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [backendMessage, setBackendMessage] = useState("");
  const [networkSpeed, setNetworkSpeed] = useState(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const data = await testBackendConnection();
        setBackendMessage("Connection successful");
        setIsServerRunning(true);
        setNetworkSpeed(data.speed || 0);
      } catch (error) {
        setBackendMessage("Server is not running. Please check the backend.");
        setIsServerRunning(false);
        setNetworkSpeed(0);
      }
    };

    checkBackend();
  }, []);

  const isSlow = networkSpeed !== null && networkSpeed < 5;
  const isFast = networkSpeed !== null && networkSpeed >= 20;

  return (
    <>
      <SpeedBar>
        <SpeedLevel level={networkSpeed} />
      </SpeedBar>
      <SpeedText speed={networkSpeed}>
        {networkSpeed !== null ? `${networkSpeed.toFixed(2)} Mbps` : "N/A"}
      </SpeedText>
      <ServerIndicator isRunning={isServerRunning} networkSpeed={networkSpeed}>
        <Icon>
          {isServerRunning ? <FaNetworkWired /> : <FaExclamationTriangle />}
        </Icon>
        <Tooltip>
          <div>{backendMessage}</div>
          {isServerRunning && networkSpeed !== null && (
            <div>Speed: {networkSpeed.toFixed(2)} Mbps</div>
          )}
        </Tooltip>
      </ServerIndicator>
      <StatusBar>
        <StatusIndicator active={isSlow} />
        <StatusIndicator active={isFast} />
      </StatusBar>
    </>
  );
};

export default TestBackend;
