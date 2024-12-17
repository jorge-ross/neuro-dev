import { useState } from 'react';
import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import emailjs from 'emailjs-com' 

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  grid-row: 1;
  grid-column: 1 / 3;

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const Input = styled.input`
  ${typography2.text.md};
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  height: 30px;
  background-color: #f5f5f5;
  width: 100%;

  @media (max-width: 600px) {
    width: 95%;
    align-self: center;
  }

  @media (max-width: 350px){
    ${typography2.text.xss}
  }
`;

const TextArea = styled.textarea`
  ${typography2.text.md};
  background-color: #f5f5f5;
  max-width: auto;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  height: 100px;
  grid-row: 2;
  grid-column: 1 / 3;

   @media (max-width: 350px){
    ${typography2.text.xss}
  }
`;

const Button = styled.button`
  ${typography.text.md};
  padding: 0.7rem 2rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  width: 75%;
  align-self: center;
  height: 50px;
  grid-row: 3;
  grid-column: 1 / 3;
  justify-self: center;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    background-color: #292929;
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

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Correo enviado con éxito:', response.status, response.text);
          alert('Mensaje enviado con éxito');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Error al enviar el mensaje');
        }
      );
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
          placeholder="Tu mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputContainer>
      <TextArea
        name="message"
        placeholder="Escribe aquí tu mensaje"
        rows="3"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Enviar mensaje</Button>
    </Form>
  );
};

export default ContactForm;
