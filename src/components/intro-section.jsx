import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import bgImage from '../assets/images/intro-background.png';

const SectionContainer = styled.section`
  width: 100%;
  min-height: 400px;
  background-image: url('${bgImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0 8rem 0;
  background-color: white;
  text-align: center;

  @media (max-width: 1000px) {
    padding-top: 9rem;
     padding-bottom: 3rem;
  }
`;



const SectionTitle = styled.div`
  ${typography.head.xxl};
  color: white;
  margin: 0;
  padding-bottom: 2rem;
  font-weight: 600;
  line-height: 1.5;
  width: 90%;

  @media (max-width: 700px) {
    ${typography.head.lga}
    line-height: 1.1;
  }
`;


const Description = styled.p`
  ${typography2.text.xl};
  color: white;
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
  ${typography.text.lg};
  max-width: 350px;
  padding: 1rem 2rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

   @media (max-width: 700px) {
    ${typography.text.md}
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
