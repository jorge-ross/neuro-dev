import styled from 'styled-components';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;

`

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: #123456;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  display:flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #123456;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0f3a7b;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission... send data to a server or email service
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <GeneralContainer>
      <Header />
    <ContactSection>
      <SectionTitle>Contacto</SectionTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Nombre:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </FormField>
        <FormField>
          <Label htmlFor="email">Correo Electrónico:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </FormField>
        <FormField>
          <Label htmlFor="subject">Asunto:</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            />
        </FormField>
        <FormField>
          <Label htmlFor="message">Mensaje:</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
    </ContactSection>
    <Footer />
    </GeneralContainer>
  );
};

export default Contact;
