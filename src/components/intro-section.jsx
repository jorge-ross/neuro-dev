import styled from 'styled-components';
import { colors } from '../styles/colors';
import psychologyImage from '../assets/images/int-section-img.png'; // Add a relevant image

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background-color: ${colors.stone[200]};
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  color: ${colors.blue[900]};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.blue[900]};
  padding-top: 2rem;
  margin-bottom: 0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${colors.grey[700]};
  line-height: 1.6;
  max-width: 800px;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  flex: 1 1 300px;
  max-width: 300px;
  text-align: left;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.blue[900]};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${colors.grey[700]};
`;

const IntroSection = () => {

  return (
      <SectionContainer>
      <SectionTitle>Psicología y Neuropsicología</SectionTitle>
      <Image src={psychologyImage} alt="Psicología y Neuropsicología" />
      <Description>
        Bienvenido a nuestros servicios de psicología y neuropsicología. Estamos dedicados a brindar atención compasiva y basada en evidencia para ayudarte a alcanzar el bienestar mental y mejorar tu calidad de vida. Nuestros servicios están diseñados para satisfacer tus necesidades individuales y están pensados para apoyarte en cada paso de tu camino.
      </Description>
      <SectionSubtitle>Algunos servicios</SectionSubtitle>
      <ServicesContainer>
        <ServiceCard>
          <ServiceTitle>Terapia Individual</ServiceTitle>
          <ServiceDescription>
            Sesiones de terapia personalizadas para ayudarte a enfrentar los desafíos de la vida y trabajar hacia tus metas personales.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Evaluaciones Neuropsicológicas</ServiceTitle>
          <ServiceDescription>
            Evaluaciones exhaustivas para comprender el funcionamiento cognitivo y proporcionar información para la planificación del tratamiento.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Rehabilitación Neuropsicológica</ServiceTitle>
          <ServiceDescription>
            Sesiones de terapia colaborativa para fomentar el apoyo entre pares y compartir experiencias en un entorno grupal.
          </ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
    </SectionContainer>
  );
};

export default IntroSection;
