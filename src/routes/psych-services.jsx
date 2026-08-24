import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import psych from '/assets/images/psique.png'
import { typography, typography2 } from '../styles/typography';
import { psychServices } from '../data/services';
import Footer from '../components/footer';
import psychImage from '/assets/images/psico-background.png';
import { psyText } from '../data/definitions';
import { MdOutlinePsychology } from "react-icons/md";
import { colors } from '../styles/colors';

const GeneralContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  background-color: ${colors.stone[50]};
`;

const Title = styled.h1`
  ${typography.head.xl}
  color: ${colors.blue[900]};
  margin: 0;
  align-self: center;
  width: 80%;
  padding: 6rem 0 3rem 0;

  @media (max-width: 800px) {
    ${typography.head.lgx}
  }

  @media (max-width: 750px) {
    width: 90%;
    padding: 3.5rem 0 2rem 0;
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
  width: 80%;
  color: black;
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

const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 75%;
  padding-top: 1.5rem;
  padding-bottom: 5rem;

  @media (max-width: 750px) {
    width: 90%;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
`;

const InfoTitle = styled.h2`
  ${typography2.head.sm};
  color: ${colors.blue[900]};
  text-align: left;
  margin: 2rem 0 2.5rem 0;

  @media (max-width: 500px) {
    margin: 1.5rem 0 2rem 0;
  }

  @media (max-width: 450px) {
    ${typography2.head.xss}
  }
`;

const ServicesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Menú desplegable en móvil */
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 600px) {
    border-radius: 8px;
    padding: 1rem 1.25rem;
    gap: 0.5rem;
  }
`;

const CardHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
`;

const ServiceTitle = styled.span`
  ${typography2.head.xls};
  color: black;
  font-weight: 400;

  @media (max-width: 450px) {
    ${typography2.text.md}
  }
`;

const Chevron = styled.span`
  display: none;
  font-size: 1.1rem;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});

  @media (max-width: 600px) {
    display: inline-block;
  }
`;

const Description = styled.p`
  ${typography2.text.md};
  color: #444;
  margin: 0;
  line-height: 1.4rem;

  ${({ $open }) =>
    $open
      ? css`
          display: block;
        `
      : css`
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        `}

  @media (max-width: 600px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

const SeeMoreButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  color: #0057b8;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none; /* en móvil el header ya abre/cierra la tarjeta */
  }
`;

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, [service.description]);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <Card>
      <CardHeader
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`service-desc-${service.id}`}
      >
        <ServiceTitle>{service.title}</ServiceTitle>
        <Chevron $open={isOpen} aria-hidden="true">▾</Chevron>
      </CardHeader>

      <Description
        id={`service-desc-${service.id}`}
        ref={descriptionRef}
        $open={isOpen}
      >
        {service.description}
      </Description>

      {isOverflowing && (
        <SeeMoreButton type="button" onClick={toggleOpen}>
          {isOpen ? 'Ver menos' : 'Ver más'}
        </SeeMoreButton>
      )}
    </Card>
  );
};

const PsychServices = () => {
  return (
    <GeneralContainer>
      <Header />

      <Title>
        <MdOutlinePsychology /> Psicología</Title>
      <PsychText>{psyText}</PsychText>

      <ServicesSection>
        <InfoTitle>Servicios</InfoTitle>
        <ServicesGrid>
          {psychServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ServicesGrid>
      </ServicesSection>

      <Footer />
      <Terms />
    </GeneralContainer>
  );
};

export default PsychServices;