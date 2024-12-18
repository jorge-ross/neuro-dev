import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Terms from '../components/terms';
import servicesBrain from '../assets/images/brain-services.png'
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';
import { psychServices } from '../data/services';
import Footer from '../components/footer';
import TestimonialSection from '../components/testimonial';

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
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex:
  flex-direction: column;
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`

const SectionTitle = styled.h1`
 ${typography.head.lgx}
  color: black;
  text-align: center; 
  margin: 0;
  padding-bottom: 2rem;
`;

const Subtitle = styled.h1`
  ${typography2.text.lg}
  color: black;
  font-weight: 500;
  text-align: center; 
  margin: 0;
  padding-bottom: 2.5rem;
`;


const ServicesContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
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
  height: 130px;
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
  max-width: 300px;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  border: 2px solid red;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

const Modal = ({ service, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <GeneralContainer>
      <Header />
      <ServicesSection>
        <TextContainer>
          <SectionTitle>Servicios</SectionTitle>
          <Subtitle>Da click en cualquiera de los servicios para conocer más.</Subtitle>
          <ServicesImg src={servicesBrain}/>
        </TextContainer>
          <ServicesContainer>
            {psychServices.map(service => (
              <ServiceCard key={service.id} onClick={() => setSelectedService(service)}>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceCard>
            ))}
          </ServicesContainer>

      </ServicesSection>
      {selectedService && (
        <Modal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        />
      )}
      <TestimonialSection />
      <Footer />
      <Terms />
    </GeneralContainer>
  );
};

export default Services;
