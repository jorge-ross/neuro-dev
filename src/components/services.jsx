import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import { colors } from '../styles/colors';

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background-color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  flex: 1 1 300px;
  max-width: 300px;
  min-height: 150px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ServiceTitle = styled.h1`
  ${typography2.head.sm}
  color: white;
  margin: 0 0 1rem 0;
`;

const ServiceDescription = styled.p`
${typography.text.xss}
  margin: 0;
  font-size: 1rem;
  color: white;
`;

const SectionSubtitle = styled.h1`
  ${typography.head.lgx}
  color: black;
  padding-top: 4rem;
  text-align: center;

   @media (max-width: 500px) {
    ${typography.head.lg};
    margin-bottom: 0;
  }
`;

const AllServices = styled(Link)`
  ${typography2.text.sm}
  padding-top: 2rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: ${colors.stone[500]};
  }
`


const Services = () => {

  return(
    <>
      <SectionSubtitle>Mis servicios</SectionSubtitle>
        <ServicesContainer>
          <ServiceCard>
            <ServiceTitle>Terapia Individual</ServiceTitle>
            <ServiceDescription>
              Sesiones de terapia personalizadas para ayudarte a enfrentar los desafíos de la vida y trabajar hacia tus metas personales.
            </ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Evaluaciones</ServiceTitle>
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
      <AllServices>Ver todos los servicios →</AllServices>
    </>
  )
}

export default Services;