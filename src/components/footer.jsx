import styled from 'styled-components';
import { typography } from '../styles/typography';
import { FaEnvelope } from 'react-icons/fa';

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
  padding: 2rem 0;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
`;

const Section = styled.div`
  margin: 0;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SectionTitle = styled.h1`
  ${typography.head.xs}
  margin: 0.5rem 0;
  color: black;
  padding-bottom: 0.5rem;
  text-align: center;
`;



const Footer = () => {

  return (
    <Gral id="contact">
      <FooterContainer>
        <SectionTitle>TE ESCUCHO...</SectionTitle>
        <Section>
          <WhatsAppButton phoneNumber='7221010162'/>
          <ContactForm />
        </Section>
      </FooterContainer>
    </Gral>
  );
};

export default Footer;
