import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled components for the page
const SettingsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const ProfilePicWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfilePic = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadButton = styled.label`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  input {
    display: none;
  }
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }
`;

const Settings = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Robert Okuni");
  const [email, setEmail] = useState("o.robert1994@hotmail.com");
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Here you can send the updated data to the server or save it to localStorage.
    alert("Settings saved successfully!");
  };

  const handleCancel = () => {
    // Navigate back to the previous page or dashboard.
    navigate("/");
  };

  return (
    <SettingsContainer>
      <SectionTitle>Profile Settings</SectionTitle>

      <label>Username</label>
      <InputField
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your username"
      />

      <label>Email</label>
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <ProfilePicWrapper>
        <ProfilePic
          src={profilePic || "https://via.placeholder.com/60"}
          alt="Profile Picture"
        />
        <UploadButton>
          Upload New Picture
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </UploadButton>
      </ProfilePicWrapper>

      <SaveButton onClick={handleSaveChanges}>Save Changes</SaveButton>
      <SaveButton onClick={handleCancel}>Cancel</SaveButton>
    </SettingsContainer>
  );
};

export default Settings;
