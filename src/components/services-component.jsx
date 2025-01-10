import styled from 'styled-components';
import { typography2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import logoservices from '../assets/images/corpimage.png';
import logow from '../assets/images/logow.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const ServicesContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
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
  padding: 4rem 0;

  @media (max-width: 1000px) {
    padding-bottom: 2rem;
  }

  @media (max-width: 400px) {
    padding-bottom: 1rem;
  }
  `
  
  const CorpImage = styled.img`
  width: 60%;

  @media (max-width: 600px) {
    width: 75%;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  ${typography2.text.xl};
  font-weight: 500;
  background-color: black;
  color: white;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  min-width: 390px;
  min-height: 90px;

  @media (max-width: 1000px) {
    min-width: 530px;
  }

  @media (max-width: 700px) {
    ${typography2.text.lg};
    min-width: 400px;
    min-height: 80px;
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
    background-color: #292929;
  }
`;

const LogoImgCont = styled.img`
  max-width: 1.7rem;

  @media (max-width: 500px) {
    max-width: 1.3rem;
  }

  @media (max-width: 400px) {
    max-width: 1rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
`;

const ServicesComponent = () => {

  return(
    <>
    <CorpImageContainer>
      <CorpImage src={logoservices} />
    </CorpImageContainer>

    <Container>
      <ServicesContainer>
        <StyledLink to="/services">
        <Button onClick={() => window.scrollTo(0, 0)}>
          <LogoImgCont src={logow} alt="logo" />
          Psicología
        </Button>
        </StyledLink>
        <StyledLink to="/services">
        <Button onClick={() => window.scrollTo(0, 0)}>
          <LogoImgCont src={logow} alt="logo" />
          Neuropsicología
        </Button>
        </StyledLink>
      </ServicesContainer>
    </Container>
    </>
  )
}

export default ServicesComponent;