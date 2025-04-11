import styled from 'styled-components';
import { typography2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import logon from '/assets/images/logond.png';
import psicCard from '/assets/images/psic-card.png';
import neuroCard from '/assets/images/neu-card.png';
import consCard from '/assets/images/cons-card.png';
import { typography } from '../styles/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Title = styled.h2`
  ${typography2.head.lgx};
  color: black;
  text-align: center;
  margin: 3rem 0 1rem;

  @media (max-width: 1000px) {
    ${typography.head.lg};
    margin: 2rem 0 1rem;
  }
`

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 2rem 0 3rem;
  gap: 2rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-top: 1rem;
  }
`

const ServiceText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  ${typography2.head.sm};
  color: black;

  @media (max-width: 1000px) {
    min-width: 530px;
    color: white;
    flex-direction: row-reverse;
    gap: 0.5rem;
  }

  @media (max-width: 700px) {
    ${typography2.text.lg};
    min-width: 400px;
  }

   @media (max-width: 600px) {
    min-width: 380px;
  }

  @media (max-width: 400px) {
    ${typography2.text.md};
    min-width: 270px;
    min-height: 60px;
  }
`;

const LogoImgCont = styled.img`
  max-width: 2.5rem;

  @media (max-width: 1000px) {
    filter: brightness(0) invert(1); 
  }

  @media (max-width: 700px) {
    max-width: 1.3rem;
  }

  @media (max-width: 400px) {
    max-width: 1rem;
  }
`

const Wrapper = styled(Link)`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 280px;
  padding-top: 11rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.88;
  filter: brightness(0.4);

  @media (max-width: 1000px) {
    width: 81%;
    height: 50px;
    padding-bottom: 1.5rem;
    background-position: 0 30%;
    opacity: 1;
    filter: brightness(1);
    padding-top: 9rem;
  }

  &:hover ${ServiceText} {
    color: white;
  }

  &:hover ${LogoImgCont} {
    filter: brightness(0) invert(1); 
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
    opacity: 1;
    filter: brightness(1);
 }
`


const ServicesComponent = () => {

  return (
    <>

      <Container>
        <Title>Servicios</Title>
        <ServicesContainer>
          <Wrapper to="/psicologia" src={psicCard} alt="psicCard" onClick={() => window.scrollTo(0, 0)}>
            <ServiceText>
              Psicología
              <LogoImgCont src={logon} alt="logo" />
            </ServiceText>
          </Wrapper>

          <Wrapper to="/neuropsicologia" src={neuroCard} alt="neuroCard" onClick={() => window.scrollTo(0, 0)}>
            <ServiceText>
              Neuropsicología
              <LogoImgCont src={logon} alt="logo" />
            </ServiceText>

          </Wrapper>
          <Wrapper to="/consultoria" src={consCard} alt="consCard" onClick={() => window.scrollTo(0, 0)}>
            <ServiceText>
              Consultoría
              <LogoImgCont src={logon} alt="logo" />
            </ServiceText>
          </Wrapper>
        </ServicesContainer>
      </Container>
    </>
  )
}

export default ServicesComponent;