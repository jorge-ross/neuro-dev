import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import { colors } from '../styles/colors';
import { psychServices } from '../data/services';

const Container = styled.div`
  padding: 5.5rem 0 4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 1rem 0 3rem;
  }
`

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin: 2rem 0;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    gap: 1.5rem;
  }

  @media (max-width: 350px) {
    gap: 0.5rem;
  }
`;

const ServiceCard = styled.div`
  background-color: black;
  border-radius: 10px;
  width: 250px;
  height: 130px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 600px) {
    width: 200px;
    height: 100px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 90px;
  }

  @media (max-width: 350px) {
    width: 140px;
    height: 80px;
  }
`;

const Title = styled.h1`
  ${typography.head.lgx}
  color: black;
  text-align: center;
  margin: 2rem 0;

   @media (max-width: 700px) {
    ${typography.head.lg};
    margin: 1rem 0;
  }
`;

const ServiceTitle = styled.h1`
  ${typography2.head.xs}
  color: white;
  margin: 2rem;

  @media (max-width: 700px) {
    font-weight: 400;
  }

  @media (max-width: 500px) {
    ${typography.text.lg};
  }

  @media (max-width: 350px) {
    ${typography.text.md};
  }
`;

const AllServices = styled(Link)`
  ${typography2.text.lg}
  text-decoration: none;
  color: black;
  margin: 2rem 0;
  text-align: center;

  &:hover {
    color: ${colors.stone[500]};
  }

  @media (max-width: 700px) {
    margin-top: 1rem;
    text-decoration: underline;
  }
`


const ServicesComponent = () => {

  return(
    <Container>
      <Title>Servicios</Title>
      <ServicesContainer>
      {psychServices.slice(0, 6).map(service => (
        <ServiceCard key={service.id}>
          <ServiceTitle>{service.title}</ServiceTitle>
        </ServiceCard>
      ))}
      </ServicesContainer>
      <AllServices to="/services" onClick={() => window.scrollTo(0, 0)}>Ver todos los servicios →</AllServices>
    </Container>
  )
}

export default ServicesComponent;