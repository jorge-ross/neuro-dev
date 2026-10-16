import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';
import WhatsAppButton from './whats-app-button';
import InstagramButton from './insta-button';

const Gral = styled.div`
background:white;
border-top: 1px solid black;
border-bottom: 1px solid black;
width: 100%;
display: flex;
justify-content: center;

`

const FooterContainer = styled.footer`
  padding: 3rem 0;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 60%;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 1rem;
  }
`;

const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1000px) {
    width: 100%;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.md}
  margin: 0;
  color: ${colors.blue[900]};
  text-align: center;
`;

const MailOption = styled.h2`
  ${typography.head.sm}
  margin: 0;
  color: ${colors.blue[900]};
  text-align: center;
`;

const Inst = styled.p`
  ${typography2.text.sm}
  margin: 0;
  text-align: center;

`

const WhatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const InstaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 2;
  align-self: center;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`

const BookButton = styled.a`
  ${typography.head.xss};
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  padding: 1rem 1.4rem;
  background-color: ${colors.blue[900]};
  color: white;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;

   @media (max-width: 700px) {
    ${typography2.text.md};
    margin-bottom: 0.4rem;
    font-weight: 500;
  }
  
  &:hover {
    background-color: ${colors.blue[600]};
  }
`

const BookingSection = () => {

  return (
    <Gral id="contact">
      <FooterContainer>
        <SectionTitle>Da el primer paso hacia tu bienestar</SectionTitle>
        <BookButton href="https://neurodev-booking.netlify.app/">
          Quiero empezar hoy
        </BookButton>
        <Section>
          <SocialMediaContainer>
            <WhatsContainer>
              <WhatsAppButton phoneNumber={import.meta.env.VITE_PHONE_NUMBER} />
              <Inst>También puedes enviar un Whatsapp.</Inst>
            </WhatsContainer>
            <InstaContainer>
              <InstagramButton url="https://www.instagram.com/_neurodev/" style={{ fontSize: '2.5rem', color: '#E1306C' }} />
              <Inst>Este es el Instagram de Neuro-dev</Inst>
            </InstaContainer>
          </SocialMediaContainer>
        </Section>
      </FooterContainer>
    </Gral>
  );
};

export default BookingSection;
