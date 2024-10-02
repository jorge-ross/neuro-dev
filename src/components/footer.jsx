import styled from 'styled-components';
import { typography } from '../styles/typography';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import ContactForm from './contact-form';

const Gral = styled.div`
background:white;
border-top: 1px solid black;
width: 100%;
`

const FooterContainer = styled.footer`
  padding: 1.5rem 0 2rem;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section = styled.div`
  width: 100%;
  margin: 0;
  display:flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  ${typography.text.lg}
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: black;
  padding-bottom: 0.5rem;
  text-align: left;
`;

const ContactInfo = styled.p`
  margin: 0.5rem 0;
  color: black;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 20px;
  color: black;
`;


const Footer = () => {

  return (
    <Gral>
      <FooterContainer>
        <Section>
          <SectionTitle>TE ESCUCHO...</SectionTitle>
          <ContactInfo>
            <Icon><FaPhoneAlt /></Icon> 
            +52 55 5555 5555
          </ContactInfo>
          <ContactInfo>
            <Icon><FaEnvelope /></Icon> 
            mi_mail@gmail.com
          </ContactInfo>
          <ContactForm />
        </Section>
      </FooterContainer>
    </Gral>
  );
};

export default Footer;
