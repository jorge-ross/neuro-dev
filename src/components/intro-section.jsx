import styled from 'styled-components';
import { colors } from '../styles/colors';
import { typography, typography2 } from '../styles/typography';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rem 2rem 2rem;
  background-color: white;
  text-align: center;

  @media (max-width: 700px) {
    padding-top: 10rem;
    padding-bottom: 3rem;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.xxl}
  color: black;
  margin: 0;
  padding-bottom: 2rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 700px) {
    ${typography.head.lgx}
    line-height: 1.1;
  }
`;


const Description = styled.p`
  ${typography2.text.xl};
  color: ${colors.grey[700]};
  line-height: 1.6;
  max-width: 600px;
  width: 90%;
  margin: 0;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    ${typography.text.md}
  }
`;

const BookButton = styled.button`
  ${typography.text.md};
  max-width: 350px;
  padding: 1rem 2rem;
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
