import { useState } from 'react';
import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const Input = styled.input`
  ${typography2.text.xss};
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 350px){
    ${typography2.text.xs}
  }
`;

const TextArea = styled.textarea`
  ${typography2.text.xss};
  max-width: auto;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;

   @media (max-width: 350px){
    ${typography2.text.xs}
  }
`;

const Button = styled.button`
  ${typography2.text.sm}
  padding: 0.7rem 2rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  width: 100%;
  height: 40px;

  @media (max-width: 350px) {
    height: auto;
  }

  &:hover {
    background-color: grey;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando mensaje:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputContainer>
      <TextArea
        name="message"
        placeholder="Escribe aquí tu mensaje"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Enviar mensaje</Button>
    </Form>
  );
};

export default ContactForm;
