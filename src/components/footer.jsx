import styled from 'styled-components';
import { useState } from 'react';
import { colors } from '../styles/colors';
import GralModal from './modals/gral-modal';
import { Link } from 'react-router-dom';
import { typography } from '../styles/typography';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


import ContactForm from './contact-form';

const Gral = styled.div`
background: ${colors.stone[100]};
width: 100%;
display: flex;
border-top: 1px solid black;
`

const FooterContainer = styled.footer`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem 0;
`;

const SectionOne = styled.div`
  width: 100%;
  margin: 1rem 0;
  display:flex;
  align-self: flex-start;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  ${typography.text.lg}
  font-size: 1.2rem;
  margin: 0;
  color: ${colors.black[900]};
  padding-bottom: 1rem;
  text-align: center;
`;

const ContactInfo = styled.p`
  margin: 0.5rem 0;
  text-align: center;
  color: blue;
`;

const Option = styled.p`
color: ${colors.blue[950]};
display: block;
text-decoration: none;
margin: 0.5rem 0;
text-align: center;
cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(Link)`
  align-items: center;
  text-decoration: none;
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
        <SectionOne>
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
        </SectionOne>
      </FooterContainer>
    </Gral>
  );
};

export default Footer;
