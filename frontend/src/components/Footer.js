import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1f2937; /* Tailwind's bg-gray-900 */
`;

const FooterContent = styled.div`
  max-width: 80rem; /* Tailwind's max-w-7xl */
  margin: 0 auto;
  padding: 3rem 1rem; /* Tailwind's py-12 and px-4 */
  @media (min-width: 640px) {
    padding: 3rem 1.5rem; /* Tailwind's sm:px-6 */
  }
  @media (min-width: 1024px) {
    padding: 3rem 2rem; /* Tailwind's lg:px-8 */
  }
`;

const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* Tailwind's md:grid-cols-3 */
  }
`;

const FooterSectionTitle = styled.h3`
  color: white;
  font-size: 1.125rem; /* Tailwind's text-lg */
  font-weight: 600;
  margin-bottom: 1rem; /* Tailwind's mb-4 */
`;

const FooterText = styled.p`
  color: #9ca3af; /* Tailwind's text-gray-400 */
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.5rem; /* Tailwind's space-y-2 */
`;

const FooterLink = styled(Link)`
  color: #9ca3af;
  transition: color 0.2s;
  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem; /* Tailwind's mt-8 */
  padding-top: 2rem; /* Tailwind's pt-8 */
  border-top: 1px solid #374151; /* Tailwind's border-gray-800 */
  text-align: center;
`;

const FooterBottomText = styled.p`
  color: #9ca3af;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <div>
            <FooterSectionTitle>EmailComplete</FooterSectionTitle>
            <FooterText>
              Making professional email communication easier.
            </FooterText>
          </div>
          <div>
            <FooterSectionTitle>Quick Links</FooterSectionTitle>
            <FooterLinkList>
              <FooterLinkItem>
                <FooterLink href="#features">Features</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="#how-it-works">How It Works</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="#pricing">Pricing</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="#contact">Contact</FooterLink>
              </FooterLinkItem>
            </FooterLinkList>
          </div>
          <div>
            <FooterSectionTitle>Contact Us</FooterSectionTitle>
            <FooterText>Email: support@emailcomplete.com</FooterText>
            <FooterText>Phone: (555) 123-4567</FooterText>
          </div>
        </FooterGrid>
        <FooterBottom>
          <FooterBottomText>
            &copy; 2024 EmailComplete. All rights reserved.
          </FooterBottomText>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}
