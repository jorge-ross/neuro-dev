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

const SectionSubtitle = styled.h1`
  ${typography.head.lgx}
  color: black;
  padding-top: 4.5rem;
  text-align: center;

   @media (max-width: 600px) {
    ${typography.head.lg};
    margin-bottom: 0;
    padding-top: 3.5rem;
  }
`;

const ServiceTitle = styled.h1`
  ${typography2.head.sm}
  color: white;
  margin: 0 0 1rem 0;

  @media (max-width: 320px) {
    ${typography.head.xs};
    margin-bottom: 0;
  }
`;

const ServiceDescription = styled.p`
  ${typography.text.sm}
  margin: 0;
  color: white;
  font-weight: 100;
  line-height: 1.45;

  @media (max-width: 320px) {
    ${typography.text.xss};
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
      <SectionSubtitle>Servicios</SectionSubtitle>
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
            <ServiceTitle>Neuropsicología</ServiceTitle>
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