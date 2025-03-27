import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { typography2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import logoservices from '../assets/images/corpimage.png';
import logon from '../assets/images/logond.png';
import logow from '../assets/images/logow.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0 4rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 1.2rem;
  }
`

const CorpImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
  color: black;
  padding: 4rem 0 3rem 0;

  @media (max-width: 1000px) {
    padding-bottom: 2rem;
  }

  @media (max-width: 400px) {
    padding-bottom: 1rem;
  }
  `

const CorpImage = styled.img`
  width: 57%;

  @media (max-width: 900px) {
    width: 75%;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  ${typography2.text.xl};
  font-weight: 500;
  background-color: white;
  color: black;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  min-width: 320px;
  min-height: 50px;

  @media (max-width: 1000px) {
    min-width: 530px;
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

  &:hover {
    background-color:rgb(19, 19, 19);
    color: white;
  }
`;

const LogoImgCont = styled.img`
  max-width: 1.5rem;

  @media (max-width: 500px) {
    max-width: 1.3rem;
  }

  @media (max-width: 400px) {
    max-width: 1rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HoverButton = ({ to, text, logon, logow }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledLink to={to}>
      <Button
        onClick={() => window.scrollTo(0, 0)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LogoImgCont src={isHovered ? logow : logon} alt="logo" />
        {text}
      </Button>
    </StyledLink>
  );
};

HoverButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  logon: PropTypes.string.isRequired,
  logow: PropTypes.string.isRequired,
};


const ServicesComponent = () => {

  return (
    <>
      <CorpImageContainer>
        <CorpImage src={logoservices} />
      </CorpImageContainer>

      <Container>
        <ServicesContainer>
          <HoverButton to="/psicologia" text="Psicología" logon={logon} logow={logow} />
          <HoverButton to="/neuropsicologia" text="Neuropsicología" logon={logon} logow={logow} />
          <HoverButton to="/consultoria" text="Consultoría" logon={logon} logow={logow} />
        </ServicesContainer>
      </Container>
    </>
  )
}

export default ServicesComponent;