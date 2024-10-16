import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { typography, typography2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import { colors } from '../styles/colors';

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin: 2rem;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    gap: 1rem;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  ${typography2.head.xs}
  color: white;
  margin: 2rem;

  @media (max-width: 650px) {
    ${typography2.head.xxs}
    font-weight: 400;
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

  @media (max-width: 650px) {
    padding-top: 1rem;
  }
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

  return(
    <>
      <SectionSubtitle>Servicios</SectionSubtitle>
      <ServicesContainer>
      {services.slice(0, 6).map(service => (
        <ServiceCard key={service.id}>
          <ServiceTitle>{service.title}</ServiceTitle>
        </ServiceCard>
      ))}
      </ServicesContainer>
      <AllServices to="/services" onClick={() => window.scrollTo(0, 0)}>Ver todos los servicios →</AllServices>
    </>
  )
}

export default Services;