import styled from 'styled-components';
import { colors } from '../styles/colors';
import { typography, typography2 } from '../styles/typography';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 2rem 0;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h1`
  ${typography.head.xxl}
  color: black;
  margin: 2.5rem 0 1.5rem 0;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 600px) {
    ${typography.head.lga}
    line-height: 1.1;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`;


const Description = styled.p`
  ${typography2.text.xl};
  color: ${colors.grey[700]};
  line-height: 1.6;
  max-width: 600px;
  width: 90%;
  margin: 0 0 1.5rem 0;

  @media (max-width: 600px) {
    ${typography.text.md}
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const BookButton = styled.button`
  ${typography.text.sm}
  max-width: 250px;
  padding: 0.7rem 2rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`



const IntroSection = () => {

  const handleScrollToFooter = () => {
    const footerElement = document.getElementById('contact');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
      <SectionContainer>
      <SectionTitle>Tu camino hacia la salud mental.</SectionTitle>
      <Description>
        Comienza hoy tu viaje hacia una mente más saludable con Neuro-dev. Un servicio profesional adaptado a tus necesidades.
      </Description>
      <BookButton onClick={handleScrollToFooter}>Agenda tu consulta</BookButton>
    </SectionContainer>
  );
};

export default IntroSection;
