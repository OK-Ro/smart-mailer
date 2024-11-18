"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff);
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 1.25rem;
  color: #718096;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const ContactInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
`;

const ContactCard = styled.div`
  padding: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background-color: #e0f7fa;
  border-radius: 50%;
`;

const ContactMessageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border-color: #4e73df;
    outline: none;
    box-shadow: 0 0 0 2px rgba(78, 115, 223, 0.3);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border-color: #4e73df;
    outline: none;
    box-shadow: 0 0 0 2px rgba(78, 115, 223, 0.3);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #4e73df;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e59d9;
  }
`;

export default function ContactUs() {
  return (
    <ContactSection>
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactText>
            Have questions about EmailComplete? Our team is here to help. Reach
            out to us and experience our commitment to exceptional customer
            service.
          </ContactText>
        </motion.div>

        <ContactInfoContainer>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <ContactItem>
                  <ContactIcon>
                    <Phone className="h-6 w-6 text-blue-500" />
                  </ContactIcon>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <Mail className="h-6 w-6 text-blue-500" />
                  </ContactIcon>
                  <span className="text-gray-600">
                    support@emailcomplete.com
                  </span>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </ContactIcon>
                  <span className="text-gray-600">
                    123 Email Street, San Francisco, CA 94122
                  </span>
                </ContactItem>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "linkedin", "instagram"].map(
                    (social) => (
                      <a
                        key={social}
                        href={`https://${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                      </a>
                    )
                  )}
                </div>
              </div>
            </ContactCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactCard>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <ContactMessageForm>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <Input id="name" name="name" type="text" required />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <div>
                  <Button type="submit">Send Message</Button>
                </div>
              </ContactMessageForm>
            </ContactCard>
          </motion.div>
        </ContactInfoContainer>
      </ContactContainer>
    </ContactSection>
  );
}
