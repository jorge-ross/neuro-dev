import styled from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import psych from '/assets/images/psique.png'
import { typography, typography2 } from '../styles/typography';
import { psychServices } from '../data/services';
import Footer from '../components/footer';
import psychImage from '/assets/images/psico-background.png';
import { psyText } from '../data/definitions';

const GeneralContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  background-image: url('${psychImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`


const TopContainer = styled.div`
  padding: 6rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 3rem;
  width: 75%;
  align-self: center;

  @media (max-width: 750px) {
    width: 90%;
    gap: 2rem;
    padding: 3.5rem 0 2rem 0;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }

  @media (max-width: 420px) {
    gap: 0.75rem;
  }
`

const Title = styled.h1`
 ${typography.head.xl}
  color: white;
  margin: 0;
  align-self: center;

  @media (max-width: 800px) {
    ${typography.head.lgx}
  }

  @media (max-width: 600px) {
    ${typography.head.lga}
  }

  @media (max-width: 500px) {
    ${typography.head.lg}
  }

  @media (max-width: 420px) {
    ${typography.head.md}
  }
`;

const PsychText = styled.p`
  ${typography2.text.lg}
  width: 67%;
  color: white;
  align-self: center;
  line-height: 1.7rem;
  margin: 0;

  @media (max-width: 750px) {
    width: 87%;
  }

  @media (max-width: 450px) {
    ${typography2.text.md}
  }
`;


const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 75%;
  padding-top: 1.5rem;

  @media (max-width: 750px) {
    width: 82%;
    padding-top: 1rem;
  }
`

const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: flex-start;
  align-items: center;
  justify-self: center;
  align-self: center;
  gap: 3rem;
  padding-bottom: 5rem;
  width: 80%;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    padding-bottom: 6.5rem;
    width: 95%;
  }

  @media (max-width: 550px) {
    column-gap: 1rem;
  }
`;


const ServiceTitle = styled.li`
  ${typography2.head.xls};
  color: white;
  margin: 0;
  font-weight: 400;
  list-style: square;

  @media (max-width: 450px) {
    ${typography2.text.md}
  }
`;

const ServicesImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 150px;

  @media (max-width: 600px) {
    max-width: 100px;
  }

  @media (max-width: 500px) {
    max-width: 80px;
  }
  
  @media (max-width: 420px) {
    max-width: 50px;
  }
`

const InfoTitle = styled.h2`
  ${typography2.head.sm};
  color: white;
  text-align: left;
  padding-left: 3rem;
  margin: 2rem 0 2.5rem 0;

  @media (max-width: 750px) {
    padding-left: 0;
  }

  @media (max-width: 500px) {

    margin: 1.5rem 0 2rem 0;
  }

  @media (max-width: 450px) {
    ${typography2.head.xss}
  }
`;

const PsychServices = () => {

  return (
    <GeneralContainer>
      <Header />

      <TopContainer>
        <ServicesImg src={psych} />
        <Title>Psicología</Title>
      </TopContainer>


      <PsychText>{psyText}</PsychText>

      <ServicesContainer>
        <InfoTitle>Servicios</InfoTitle>
        <Services>
          {psychServices.map(service => (
            <ServiceTitle key={service.id}>{service.title}</ServiceTitle>
          ))}
        </Services>
      </ServicesContainer>
      <Footer />
      <Terms />
    </GeneralContainer>
  );
};

export default PsychServices;
