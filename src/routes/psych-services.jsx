import styled from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import psych from '../assets/images/psique.png'
import { typography, typography2 } from '../styles/typography';
import { psychServices } from '../data/services';
import Footer from '../components/footer';

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const ServicesSection = styled.section`
  margin: 10rem 0 5rem 0;
  display: grid;
  grid-gap: 2rem;
  row-gap: 4rem;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;

  // @media (max-width: 1000px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`;

const SectionTitle = styled.h1`
 ${typography.head.lgx}
  color: black;
  text-align: left; 
  margin: 0;
  grid-row: 1;
  grid-column: 2;
  align-self: center;
`;



const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: flex-start;
  align-items: center;
  justify-self: center;
  gap: 3rem;
  grid-row: 3;
  grid-column: 1 / 3;

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


const ServiceTitle = styled.h1`
  ${typography2.head.xs};
  color: black;
  margin: 0;

  @media (max-width: 450px) {
    ${typography2.text.md}
    font-weight: 400;
  }
`;

const ServicesImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 150px;
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

const PsychText = styled.p`
  ${typography2.text.md}
  width: 80%;
  color: black;
  text-align: justify;
  justify-self: center;
  grid-column: 1/ 3;
  grid-row: 2;

  @media (max-width: 450px) {
    ${typography2.text.sm}
  }
`;



const PsychServices = () => {

  return (
    <GeneralContainer>
      <Header />
      <ServicesSection>
        <ServicesImg src={psych} />
        <SectionTitle>Psicología</SectionTitle>
        <PsychText>La psicología es una disciplina que se encarga de estudiar el comportamiento humano y los procesos mentales. En el ámbito de la salud, la psicología se encarga de estudiar y tratar los trast
          ornos mentales y emocionales, así como de promover el bienestar y la calidad de vida de las personas. En este sentido, la psicología clínica es una de las ramas más importantes de la psicología, ya que se encarga de diagnosticar y tratar los trastornos mentales y emocionales, así como de prevenir su aparición. En este sentido, la psicología clínica se basa en la aplicación de técnicas y métodos psicológicos para ayudar a las personas a superar sus problemas emocionales y a mejorar su calidad de vida.</PsychText>
        <ServicesContainer>
          {psychServices.map(service => (
            <ServiceTitle key={service.id}>{service.title}</ServiceTitle>
          ))}
        </ServicesContainer>

      </ServicesSection>

      <Footer />
      <Terms />
    </GeneralContainer>
  );
};

export default PsychServices;
