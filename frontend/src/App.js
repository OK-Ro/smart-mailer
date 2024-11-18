import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home"; // Public landing page
import Login from "./components/Login"; // Login page
import Register from "./components/Register"; // Register page
import MainPage from "./pages/MainPage"; // Main dashboard page after login
import ViewMessages from "./components/ViewMessages";
import Status from "./components/Status";
import SendMail from "./components/SendMail";
import { checkAuth } from "./utils/api"; // Assume you have a function to check auth status
import Mail from "./components/Mail";
import { Settings } from "lucide-react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await checkAuth(token); // Implement this function to verify token
        setIsLoggedIn(response.isAuthenticated);
        if (response.isAuthenticated) {
          setUserName(response.user.name); // Assuming the user object contains a name
        }
      }
    };
    verifyUser();
  }, []);

  return (
    <Router>
      <Nav
        isLoggedIn={isLoggedIn}
        userName={userName}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        {/* Home page: Always shown as the default */}
        <Route path="/" element={<Home />} />

        {/* Login route */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Register route */}
        <Route path="/register" element={<Register />} />

        {/* Main Page: Redirect to MainPage after login */}
        <Route
          path="/main"
          element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/messages" element={<ViewMessages />} />
        <Route path="/status" element={<Status />} />
        <Route path="/send" element={<SendMail />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
    </Router>
  );
};

export default App;
