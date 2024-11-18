import React, { useEffect } from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItsWorks";
import ContactUs from "./ContactUs";
import Features from "./Features";

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SectionContainer = styled.div`
  padding: 60px 25px;
  margin: 20px 0;
  border-radius: 10px;

  transition: opacity 1s ease;

  &.visible {
    opacity: 1;
  }
`;

const HeroContainer = styled(SectionContainer)`
  height: auto;
`;

const FeaturesSection = styled(SectionContainer)`
  height: auto;
`;

const HowItWorksSection = styled(SectionContainer)`
  height: auto;
`;

const ContactSection = styled(SectionContainer)`
  height: auto;
`;

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <HomeContainer>
      <HeroContainer id="home" className="section">
        <HeroSection />
      </HeroContainer>

      <FeaturesSection id="features" className="section">
        <Features />
      </FeaturesSection>

      <HowItWorksSection id="how-it-works" className="section">
        <HowItWorks />
      </HowItWorksSection>

      <ContactSection id="contact" className="section">
        <ContactUs />
      </ContactSection>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
