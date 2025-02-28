import styled from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import psych from '../assets/images/psique.png'
import { typography, typography2 } from '../styles/typography';
import { neuroServices } from '../data/services';


const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const ServicesSection = styled.section`
  margin: 10rem 0 7rem 0;
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
  align-self: center;
  grid-row: 1;
  grid-column: 2;
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

const NeuroText = styled.p`
  ${typography.text.md};
  color: black;
  width: 80%;
  text-align: justify;
  justify-self: center;
  grid-column: 1 / 3;
  grid-row: 2;

  @media (max-width: 450px) {
    ${typography2.text.sm}
  }
`

const ConsultancyServices = () => {

  return (
    <GeneralContainer>
      <Header />
      <ServicesSection>
        <ServicesImg src={psych} />
        <SectionTitle>Consultoría y RH</SectionTitle>
        <NeuroText>La Neuropsicología clínica es una disciplina que se engloba dentro de la neurociencia. Recoge las aportaciones de la neurología y la psicología, estudiando así la relación que hay entre cerebro-conducta. Toda conducta es realizada por el cerebro y éste puede cambiarla, a la misma vez que cualquier tipo de actividad del exterior puede producir cambios en el. Esta relación bidireccional es muy importante para la neurorrehabilitación, ya que podemos usar este conocimiento para potenciar las funciones cognitivas que deseemos y mejorar así su funcionalidad. </NeuroText>
        <ServicesContainer>
          {neuroServices.map(service => (

            <ServiceTitle key={service.id}>{service.title}</ServiceTitle>

          ))}
        </ServicesContainer>

      </ServicesSection>

      <Terms />
    </GeneralContainer>
  );
};

export default ConsultancyServices;
