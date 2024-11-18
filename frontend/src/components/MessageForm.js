import React, { useState } from "react";
import axios from "axios";

const MessageForm = () => {
  const [recipientEmail, setRecipientEmail] = useState(
    "o.robert1994@hotmail.com"
  );
  const [companyName, setCompanyName] = useState("Client Company");
  const [city, setCity] = useState("Your City");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [website, setWebsite] = useState("http://yourwebsite.com");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/messages/send",
        {
          recipientEmail,
          companyName,
          city,
          phoneNumber,
          website,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Recipient Email"
        value={recipientEmail}
        onChange={(e) => setRecipientEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default MessageForm;
