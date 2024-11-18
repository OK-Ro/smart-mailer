import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

const NavContainer = styled.nav`
  background-color: #ffffff;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 900;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background: linear-gradient(135deg, #ffa751 0%, #d4145a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:hover {
    background: linear-gradient(135deg, #3498db 0%, #00c6ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
  }

  svg {
    font-size: 45px;
    transition: transform 0.3s ease;
    fill: #2c3e50;
  }

  &:hover svg {
    transform: rotate(20deg);
    fill: #3498db;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #34495e;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    color: #3498db;
    transform: scale(1.1);
  }
`;

const UserName = styled.span`
  color: #34495e;
  font-weight: bold;
  font-size: 18px;
`;

const LoginContainer = styled.div`
  position: relative;
`;

const SlantedBackground = styled.div`
  position: absolute;
  top: -1.2rem;
  right: -1rem;
  width: 400px;
  height: 92px;
  background: linear-gradient(135deg, #ffa751 0%, #d4145a 100%);
  border: 1px solid #d4145a;
  -webkit-clip-path: polygon(20% 0, 100% 0, 100% 65%, 2% 64%);
  clip-path: polygon(20% 0, 100% 0, 100% 65%, 2% 64%);
  z-index: 1;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoutButton = styled.a`
  position: relative;
  z-index: 2;
  top: 52rem;
  right: 110rem;
  padding: 10px 24px;
  color: white;
  background: linear-gradient(
    135deg,
    #e74c3c 0%,
    #f39c12 100%
  ); /* Red to Orange Gradient */
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #00c6ff 0%, #007bff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const LoginButton = styled.a`
  position: relative;
  z-index: 2;
  padding: 10px 24px;
  color: white;
  background: linear-gradient(135deg, #007bff 0%, #00c6ff 100%);
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #00c6ff 0%, #007bff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #2c3e50;
    margin: 4px 0;
    transition: all 0.3s;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &.active {
    display: flex;
  }
`;

const DropdownLink = styled.a`
  color: #ecf0f1;
  padding: 10px 20px;
  text-decoration: none;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: #3498db;
  }
`;

const Nav = ({ isLoggedIn, userName, setIsLoggedIn }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with ID '${sectionId}' not found.`);
    }
  };

  return (
    <NavContainer>
      <Logo onClick={() => navigate("/")}>
        <FaEnvelope />
        Mailer
      </Logo>
      <NavLinks>
        {!isLoggedIn ? (
          <>
            <Link to="/">
              <NavLink>Home</NavLink>
            </Link>
            <NavLink onClick={() => scrollToSection("features")}>
              Features
            </NavLink>
            <NavLink onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>
          </>
        ) : (
          <>
            <Link to="/messages">
              <NavLink>Messages</NavLink>
            </Link>
            <Link to="/status">
              <NavLink>Status</NavLink>
            </Link>
            <UserName>{userName}</UserName>
          </>
        )}
      </NavLinks>
      <LoginContainer>
        <SlantedBackground />
        {!isLoggedIn ? (
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        ) : (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        )}
      </LoginContainer>
      <HamburgerMenu onClick={toggleDropdown}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <DropdownMenu className={dropdownOpen ? "active" : ""}>
        <Link to="/">
          <DropdownLink>Home</DropdownLink>
        </Link>
        {!isLoggedIn ? (
          <>
            <DropdownLink onClick={() => scrollToSection("features")}>
              Features
            </DropdownLink>
            <DropdownLink onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </DropdownLink>
            <DropdownLink onClick={() => scrollToSection("contact")}>
              Contact
            </DropdownLink>
          </>
        ) : (
          <>
            <Link to="/messages">
              <DropdownLink>Messages</DropdownLink>
            </Link>
            <Link to="/status">
              <DropdownLink>Status</DropdownLink>
            </Link>
            <DropdownLink onClick={handleLogout}>Logout</DropdownLink>
          </>
        )}
      </DropdownMenu>
    </NavContainer>
  );
};

export default Nav;
