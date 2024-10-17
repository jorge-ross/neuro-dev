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
  padding: 2rem 0 3rem;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 400px) {
    margin: 0 2rem;
  }
`;

const Section = styled.div`
  margin: 0;
  display:flex;
  flex-direction: row;
  justify-content: center;
  gap: 6.5rem;

  @media (max-width: 900px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.xs}
  margin: 0.5rem 0;
  color: black;
  padding-bottom: 0.5rem;
  text-align: center;
`;

const Inst = styled.p`
  ${typography2.text.sm}
  margin: 0;
  padding-bottom: 1.5rem;
  text-align: center;
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
        <SectionTitle>TE ESCUCHO</SectionTitle>
        <Section>
          <ContactForm />
          <WhatsContainer>
            <Inst>También puedes enviar un mensaje vía Whatsapp</Inst>
            <WhatsAppButton phoneNumber='7221010162'/>
          </WhatsContainer>
        </Section>
      </FooterContainer>
    </Gral>
  );
};

export default Footer;
