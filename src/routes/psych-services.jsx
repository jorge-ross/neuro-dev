import styled from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import psych from '../assets/images/psique.png'
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';
import { psychServices } from '../data/services';
import Footer from '../components/footer';

const GeneralContainer = styled.div`
  display: flex;
  min-height: auto;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const ServicesSection = styled.section`
  margin: 10rem 2rem 5rem 2rem;
  display: grid;
  grid-gap: 2rem;
  align-items: center;

  // @media (max-width: 1000px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`;

const PContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 2rem;
`

const SectionTitle = styled.h1`
 ${typography.head.lgx}
  color: black;
  text-align: center; 
  margin: 0;
  grid-row: 1;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
`;



const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  justify-self: center;
  gap: 2rem;
  grid-row: 1;
  grid-column: 2 / 4;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    column-gap: 1rem;
  }
`;

const ServiceCard = styled.div`
  background-color: black;
  border-radius: 1rem;
  width: 250px;
  height: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.stone[900]};
  }

  @media (max-width: 550px) {
    width: 190px;
    height: 110px;
  }

  @media (max-width: 450px) {
    width: 170px;
  }

  @media (max-width: 400px) {
    width: 150px;
  }
`;

const ServiceTitle = styled.h1`
  ${typography2.head.xs}
  color: white;
  margin: 2rem;


  @media (max-width: 450px) {
    ${typography2.text.md}
    font-weight: 400;
  }
`;

const ServicesImg = styled.img`
  align-self: center;
  max-width: 200px;
  border-radius: 1rem;
  border-bottom-right-radius: 40%;
  filter: brightness(0.9) grayscale(100%);
  
  @media (max-width: 900px) {
    align-self: center;
  }

  @media (max-width: 650px) {
    max-width: 270px;
  }

   @media (max-width: 400px) {
    max-width: 220px;
  }
`



const PsychServices = () => {

  return (
    <GeneralContainer>
      <Header />
      <ServicesSection>
        <PContainer>
          <SectionTitle>Psicología</SectionTitle>
          <ServicesImg src={psych} />
        </PContainer>
        <ServicesContainer>
          {psychServices.map(service => (
            <ServiceCard key={service.id}>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceCard>
          ))}
        </ServicesContainer>

      </ServicesSection>

      <Footer />
      <Terms />
    </GeneralContainer>
  );
};

export default PsychServices;
