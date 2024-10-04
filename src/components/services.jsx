import styled from 'styled-components';
import { typography } from '../styles/typography';

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

const SectionSubtitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.blue[900]};
  padding-top: 2rem;
  margin-bottom: 0;
`;


const Services = () => {

  return(
    <>
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
    </>
  )
}

export default Services;