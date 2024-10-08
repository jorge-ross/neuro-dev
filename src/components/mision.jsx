import styled from 'styled-components';
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';
import { Link } from 'react-router-dom';
import mv from "../assets/images/mvtarget.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  ${typography.head.lg}
  font-weight: bold;
  color: #000;
  margin-bottom: 0;
`;

const Description = styled.p`
  ${typography2.text.md}
  font-size: 1rem;
  color: ${colors.grey[700]};
  margin: 2rem 0;
  width: 85%;

  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 85%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const MV = styled(Link)`
  ${typography2.text.sm}
  color: black;

  &:hover {
    color: ${colors.stone[500]};
  }
`

const MVImg = styled.img`
  width: 100%;
  border-radius: 2rem;
`

const Mision = () => {
  return (
    <Container>
      <Title>La mision de Neurodev</Title>
      <Description>
        En Neuro-dev, nos dedicamos a brindar un apoyo a la salud mental serio, comprensivo y basado en evidencia. El objetivo es simple pero poderoso: ayudarte a alcanzar el bienestar mental que necesitas para llevar una vida plena.
        <br></br>
        <br></br>
        <MV>
          Da click aquí para conocer más sobre la misión y valores de Neurodev
        </MV>
      </Description>
      <ImagePlaceholder>
        <MVImg src={mv} alt="m" />
      </ImagePlaceholder>
    </Container>
  );
};

export default Mision;
