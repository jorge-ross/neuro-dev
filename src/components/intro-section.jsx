import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import bgImage from '../assets/images/intro-background.png';

const SectionContainer = styled.section`
  width: 100%;
  background-image: url('${bgImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 8rem 0;
  background-color: white;
  text-align: center;

  @media (max-width: 1600px) {
    padding: 100px 0;
  }

  @media (max-width: 600px) {
    padding: 5rem 0;
  }
`;



const SectionTitle = styled.p`
  ${typography.head.xxl};
  color: white;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
  width: 90%;

  @media (max-width: 700px) {
    ${typography.head.lga}
    line-height: 1.1;
  }
`;


const Description = styled.p`
  ${typography2.text.lg};
  color: white;
  line-height: 1.6;
  max-width: 600px;
  width: 90%;
  margin: 0;
  padding-bottom: 1rem;

  @media (max-width: 700px) {
    ${typography.text.md}
  }
`;

const BookButton = styled.button`
  ${typography2.head.xxs};
  max-width: 350px;
  padding: 1rem 2rem;
  margin-bottom: 1.4rem;
  background-color: white;
  color: black;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

   @media (max-width: 700px) {
    ${typography2.text.md};
    margin-bottom: 0.4rem;
    font-weight: 500;
  }
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
      <SectionTitle>Servicios profesionales de Psicología y Neuropsicología.</SectionTitle>
      <Description>
        Comienza hoy tu viaje hacia una mente más saludable con Neuro-dev. Un servicio profesional adaptado a tus necesidades.
      </Description>
      <BookButton onClick={handleScrollToFooter}>Agenda tu consulta</BookButton>
    </SectionContainer>
  );
};

export default IntroSection;
