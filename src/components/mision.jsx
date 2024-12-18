import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';
import { Link } from 'react-router-dom';
import mv from "../assets/images/mvtarget.png"

const Container = styled.div`
  border-top: 1px solid black;
  width: 80%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 3rem 0;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    border: none;
  }

  @media (max-width: 600px) {
    width: 85%;
    padding-top: 1rem;
  }
`;

const Title = styled.div`
  ${typography.head.lgx}
  font-weight: bold;
  margin-bottom: 2rem;
  justify-self: center;
  align-self: end;
  grid-column: 1;
  width: 85%;

  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
  
  @media (max-width: 600px) {
    ${typography.head.lg};
  }
`;
    
const Description = styled.p`
  ${typography2.text.lg}
  color: ${colors.grey[700]};
  margin: 0;
  width: 85%;
  justify-self: center;
  text-align: justify;
  grid-column: 1;
  grid-row: 2;

  @media (max-width: 1000px) {
    width: 100%;
    padding-bottom: 3rem;

  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  grid-row: 1 / 3;
`;

const MV = styled(Link)`
  ${typography2.text.md}
  color: black;
  grid-column: 1;
  grid-row: 2;
  justify-self: center;

  &:hover {
    color: ${colors.stone[500]};
  }
`

const MVImg = styled.img`
  width: 70%;
  border-radius: 50%;

  @media (max-width: 1000px) {
    width: 60%;
  }
`

const Mision = () => {
  return (
    <Container>
      
      <Title>La misión de Neurodev</Title>
      <Description>
        En Neuro-dev, nos dedicamos a brindar un apoyo a la salud mental serio, comprensivo y basado en evidencia. El objetivo es simple pero poderoso: ayudarte a alcanzar el bienestar mental que necesitas para llevar una vida plena.
        <br />
        <br />
      <MV>
        Descubra más sobre la misión y los valores de Neurodev
      </MV>
      </Description>
      <ImagePlaceholder>
        <MVImg src={mv} alt="m" />
      </ImagePlaceholder>
    </Container>
  );
};

export default Mision;
