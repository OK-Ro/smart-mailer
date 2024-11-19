import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Styled components
const PageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f7fc;
  overflow: hidden;
`;

const BackgroundDesign = styled.div`
  position: absolute;
  top: 0rem;
  left: 25rem;
  width: 100%;
  height: 150vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffa751 0%, #d4145a 100%);
  border: 1px solid #d4145a;
  -webkit-clip-path: polygon(63% 0, 100% 0, 100% 65%, 2% 64%);
  clip-path: polygon(63% 0, 100% 0, 100% 65%, 2% 64%);
  z-index: 1;
`;

const LoginFormContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px 60px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 2;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 14px;
    text-align: center;
    color: #666;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const ForgotPasswordLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #3498db;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    font-size: 14px;
    color: #666;
  }

  a {
    font-size: 14px;
    color: #3498db;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://smart-mailer.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      navigate("/main");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <PageContainer>
      <BackgroundDesign />
      <LoginFormContainer>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
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
          <SubmitButton type="submit">Sign In</SubmitButton>
        </form>
        <ForgotPasswordLink to="/forgot-password">
          Forgot your password?
        </ForgotPasswordLink>

        <SignUpContainer>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </SignUpContainer>
      </LoginFormContainer>
    </PageContainer>
  );
};

export default Login;
