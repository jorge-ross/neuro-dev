import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';

import ContactForm from './contact-form';
import WhatsAppButton from './whats-app-button';

const Gral = styled.div`
background:white;
border-top: 1px solid black;
width: 100%;
display: flex;
justify-content: center;
`

const FooterContainer = styled.footer`
  padding: 3rem 0 4rem;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;

  @media (max-width: 700px) {
    gap: 1rem;
    padding: 2.5rem 0 3.5rem;; 
  }

  @media (max-width: 400px) {
    margin: 0 2rem;
  }
`;

const Section = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 1000px) {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.md}
  margin: 0;
  color: black;
  padding-bottom: 0.5rem;
  text-align: center;
`;

const Inst = styled.p`
  ${typography2.text.sm}
  margin: 0;
  padding-bottom: 1rem;
  text-align: center;

  @media (max-width: 1000px) {
   padding-bottom: 0.9rem;
  }

`

const WhatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Footer = () => {

  return (
    <Gral id="contact">
      <FooterContainer>
        <SectionTitle>Te escucho.</SectionTitle>
        <Section>
          <ContactForm />
          <WhatsContainer>
            <Inst>O, si lo prefieres, puedes enviar un mensaje vía Whatsapp.</Inst>
            <WhatsAppButton phoneNumber={import.meta.env.VITE_PHONE_NUMBER} />
          </WhatsContainer>
        </Section>
      </FooterContainer>
    </Gral>
  );
};

export default Footer;
