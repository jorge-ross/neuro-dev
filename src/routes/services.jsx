import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Terms from '../components/terms';
import servicesBrain from '../assets/images/brain-services.png'
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';
import { psychServices } from '../data/services';

const GeneralContainer = styled.div`
  display: flex;
  min-height: auto;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const ServicesSection = styled.section`
  margin: 7rem 2rem 5rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h1`
 ${typography.head.lgx}
  color: black;
  text-align: center;
  margin: 1.5rem 0 0 0;
  padding-bottom: 2rem;

   @media (max-width: 600px) {
    ${typography.head.lg};
  }
`;

const Subtitle = styled.h1`
  ${typography2.text.lg}
  color: black;
  padding-bottom: 3rem;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (max-width: 650px) {
    ${typography2.head.xxs}
    font-weight: 400;
  }
`;

const FrontServiceCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: black;
  border-radius: 1rem;
  width: 220px;
  height: 110px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.stone[900]};
  }

   @media (max-width: 900px) {
    width: 180px;
    height: 90px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 90px;
  }

  @media (max-width: 400px) {
    width: 130px;
    height: 70px;
  }

  @media (max-width: 400px) {
    width: 110px;
    height: 65px;
  }
`;

const ServiceTitle = styled.h1`
  ${typography2.head.xs}
  color: white;
  margin: 2rem;

  @media (max-width: 900px) {
    ${typography2.head.xxs}
    font-weight: 400;
  }

  @media (max-width: 320px) {
    ${typography2.text.xss}
    font-weight: 400;
  }
`;

const ServicesImg = styled.img`
  display: flex;
  align-self: flex-start;
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
        <SectionTitle>Servicios</SectionTitle>
        <Subtitle>Da click en cualquiera de los servicios para conocer más.</Subtitle>
        <FrontServiceCont>
          <ServicesImg src={servicesBrain}/>
          <ServicesContainer>
            {psychServices.map(service => (
              <ServiceCard key={service.id} onClick={() => setSelectedService(service)}>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceCard>
            ))}
          </ServicesContainer>
        </FrontServiceCont>
      </ServicesSection>
      {selectedService && (
        <Modal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        />
      )}
      <Terms />
    </GeneralContainer>
  );
};

export default Services;
