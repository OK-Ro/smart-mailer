import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Styled Components
const RegisterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f9f9f9;
  overflow: hidden;
`;

const BackgroundDesign = styled.div`
  position: absolute;
  top: 0rem;
  left: 25rem;
  width: 100%;
  height: 150vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Softer shadow */
  background: linear-gradient(135deg, #ffa751 0%, #d4145a 100%);
  border: 1px solid #d4145a;
  -webkit-clip-path: polygon(63% 0, 100% 0, 100% 65%, 2% 64%);
  clip-path: polygon(63% 0, 100% 0, 100% 65%, 2% 64%);
  z-index: 1;
`;

const RegisterForm = styled.div`
  position: relative;
  z-index: 2;
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Softer shadow */
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

const Brand = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  font-family: "Poppins", sans-serif;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    background-color: #1c6c8c;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #666;
`;

const FooterLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://smart-mailer.onrender.com/api/users/register", // replace with your actual endpoint
        {
          email,
          password,
          name,
          city,
          phoneNumber,
          website,
        }
      );
      alert("Registration successful!");
      navigate("/login"); // Redirect to the login page after successful registration
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register.");
    }
  };

  return (
    <RegisterContainer>
      <BackgroundDesign />
      <RegisterForm>
        <Brand>Smart Mailer</Brand>
        <FormTitle>Create an Account</FormTitle>
        <form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <Input
            type="url"
            placeholder="Website (optional)"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
        <Footer>
          <p>
            Already have an account?{" "}
            <FooterLink href="/login">Sign in</FooterLink>
          </p>
        </Footer>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
