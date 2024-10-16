import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Terms from '../components/terms';
import { typography, typography2 } from '../styles/typography';

const GeneralContainer = styled.div`
  display: flex;
  min-height: auto;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const ServicesSection = styled.section`
  padding: 7rem 2rem;
  background-color: white;
  
`;

const SectionTitle = styled.h1`
 ${typography.head.lgx}
  color: black;
  text-align: center;

   @media (max-width: 600px) {
    ${typography.head.lg};
    margin-bottom: 0;
    padding-top: 3.5rem;
  }
`;

const Subtitle = styled.h1`
  ${typography2.text.lg}
  color: black;
  padding-bottom: 2rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 650px) {
    ${typography2.head.xxs}
    font-weight: 400;
  }
`;

const FrontServiceCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
`

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: black;
  border-radius: 10px;
  width: 250px;
  height: 120px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 650px) {
    width: 200px;
    height: 100px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 90px;
  }

  @media (max-width: 400px) {
    width: 130px;
    height: 70px;
  }
`;

const ServiceTitle = styled.h1`
  ${typography2.head.xs}
  color: white;
  margin: 2rem;

  @media (max-width: 650px) {
    ${typography2.head.xxs}
    font-weight: 400;
  }
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

const ServicesImg = styled.img`
  display: flex;
  align-items:center;
  justify-content: center;
`

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8000/services');
        if (!response.ok) {
          throw new Error('Error al obtener los servicios');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <GeneralContainer>
      <Header />
      <ServicesSection>
        <SectionTitle>Servicios</SectionTitle>
        <Subtitle>Da click en cualquiera de mis servicios para conocer más.</Subtitle>
        <FrontServiceCont>
          <ServicesImg></ServicesImg>
          <ServicesContainer>
            {services.map(service => (
              <ServiceCard key={service.id}>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceCard>
            ))}
          </ServicesContainer>
        </FrontServiceCont>
      </ServicesSection>
      <Footer /> 
      <Terms />
    </GeneralContainer>
  );
};

export default Services;
