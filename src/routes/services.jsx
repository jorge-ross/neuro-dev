import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: #123456;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ServiceCategory = styled.div`
  max-width: 800px;
  text-align: center;
`;

const ServiceTitle = styled.h2`
  font-size: 1.8rem;
  color: #654321;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ServiceList = styled.ul`
  list-style-type: disc;
  text-align: left;
  padding-left: 1.5rem;
  color: #333;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Services = () => {
  return (
    <GeneralContainer>
      <Header />
    
      <ServicesSection>
        <SectionTitle>Servicios</SectionTitle>
        <ServicesContainer>
          <ServiceCategory>
            <ServiceTitle>Psicología</ServiceTitle>
            <ServiceDescription>
              Ofrecemos una gama de servicios de psicología para ayudarte a enfrentar y superar tus desafíos emocionales y mentales.
            </ServiceDescription>
            <ServiceList>
              <ServiceItem>Terapia individual para adultos</ServiceItem>
              <ServiceItem>Terapia de pareja</ServiceItem>
              <ServiceItem>Terapia familiar</ServiceItem>
              <ServiceItem>Manejo del estrés y la ansiedad</ServiceItem>
              <ServiceItem>Tratamiento de la depresión</ServiceItem>
              <ServiceItem>Orientación en el manejo de emociones</ServiceItem>
              <ServiceItem>Desarrollo personal y bienestar</ServiceItem>
            </ServiceList>
          </ServiceCategory>

          <ServiceCategory>
            <ServiceTitle>Neuropsicología</ServiceTitle>
            <ServiceDescription>
              Nos especializamos en la evaluación y tratamiento de trastornos neurológicos, utilizando un enfoque basado en evidencia para ofrecerte un cuidado integral.
            </ServiceDescription>
            <ServiceList>
              <ServiceItem>Evaluación neuropsicológica completa</ServiceItem>
              <ServiceItem>Diagnóstico de trastornos neurocognitivos</ServiceItem>
              <ServiceItem>Evaluación de deterioro cognitivo</ServiceItem>
              <ServiceItem>Rehabilitación neuropsicológica</ServiceItem>
              <ServiceItem>Tratamiento para lesiones cerebrales traumáticas</ServiceItem>
              <ServiceItem>Apoyo en casos de enfermedades neurodegenerativas (e.g., Alzheimer, Parkinson)</ServiceItem>
              <ServiceItem>Manejo de trastornos del aprendizaje</ServiceItem>
              <ServiceItem>Intervención en trastornos de atención e hiperactividad (TDAH)</ServiceItem>
            </ServiceList>
          </ServiceCategory>
        </ServicesContainer>
      </ServicesSection>
      <Footer />
      </GeneralContainer>
  );
};

export default Services;
