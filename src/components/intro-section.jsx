import styled from 'styled-components';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 2rem 0;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h1`
  ${typography.head.lgx}
  font-size: 3rem;
  color: black;
  margin-bottom: 1rem;
  font-weight: 600;
   letter-spacing: 1px;
`;


const Description = styled.p`
  font-size: 1.2rem;
  color: ${colors.grey[700]};
  line-height: 1.6;
  max-width: 600px;
  width: 90%;
`;



const IntroSection = () => {

  return (
      <SectionContainer>
      <SectionTitle>Tu camino hacia la salud mental.</SectionTitle>
      <Description>
        Bienvenido a nuestros servicios de psicología y neuropsicología. Estamos dedicados a brindar atención compasiva y basada en evidencia para ayudarte a alcanzar el bienestar mental y mejorar tu calidad de vida. Nuestros servicios están diseñados para satisfacer tus necesidades individuales y están pensados para apoyarte en cada paso de tu camino.
      </Description>
    </SectionContainer>
  );
};

export default IntroSection;
