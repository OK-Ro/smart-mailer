import React from "react";
import styled from "styled-components";

// New Client Cards Section
const ClientCardContainer = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  justify-content: center;
  max-height: 500px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ClientCard = styled.div`
  background-color: white;
  width: 27rem;
  border-radius: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ClientImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ClientName = styled.h3`
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const ClientRole = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ClientDate = styled.p`
  color: #95a5a6;
  font-size: 0.9rem;
  font-weight: 400;
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
`;

// Main Component
const NewClients = () => {
  const newClients = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      registrationDate: "2024-11-12",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      registrationDate: "2024-11-10",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Samuel Lee",
      role: "UX Designer",
      registrationDate: "2024-11-08",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emma Watson",
      role: "Marketing Specialist",
      registrationDate: "2024-11-05",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Michael Johnson",
      role: "Full Stack Developer",
      registrationDate: "2024-11-03",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Olivia Brown",
      role: "Data Analyst",
      registrationDate: "2024-10-30",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "James Williams",
      role: "UI/UX Developer",
      registrationDate: "2024-10-28",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Isabella Martinez",
      role: "HR Manager",
      registrationDate: "2024-10-26",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "Ethan Davis",
      role: "Project Manager",
      registrationDate: "2024-10-22",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Sophia Garcia",
      role: "Product Designer",
      registrationDate: "2024-10-19",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 11,
      name: "William Wilson",
      role: "Software Architect",
      registrationDate: "2024-10-15",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 12,
      name: "Ava Anderson",
      role: "Business Analyst",
      registrationDate: "2024-10-12",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <ClientCardContainer>
      {newClients.map((client) => (
        <ClientCard key={client.id}>
          <ClientImage src={client.image} alt={client.name} />
          <ClientDetails>
            <ClientName>{client.name}</ClientName>
          </ClientDetails>
          <ClientRole>{client.role}</ClientRole>
          <ClientDate>{client.registrationDate}</ClientDate>
        </ClientCard>
      ))}
    </ClientCardContainer>
  );
};

export default NewClients;
