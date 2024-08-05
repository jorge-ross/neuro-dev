import styled from 'styled-components';
import fareImg from '../assets/images/fee.png';
import testimoniosImage from '../assets/images/client-rate.jpg';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: #123456; 
  margin-bottom: 1rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 300px;
  margin: 1rem;

`;

const CardImage = styled.img`
  width: 100%;
  max-height: 320px;
  border-radius: 10px;
`;

const CardLabel = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #123456;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
   font-size: 1rem;
  color: #654321;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
  text-overflow: ellipsis;
`;

const CardLink = styled.a`
  font-size: 1rem;
  color: #4caf50;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Arrow = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const FareTestSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Descubre Más</SectionTitle>
      <CardsContainer>
        <Card>
          <CardImage src={fareImg} alt="Tarifas y Descuentos" />
          <CardLabel>HONORARIOS</CardLabel>
          <CardTitle>Tarifas y Acuerdos</CardTitle>
          <CardDescription>
            Empezar una terapia es un paso importante.
          </CardDescription>
          <CardLink href="#">
            Leer más <Arrow>➔</Arrow>
          </CardLink>
        </Card>
        <Card>
          <CardImage src={testimoniosImage} alt="Testimonios" />
          <CardLabel>TESTIMONIOS</CardLabel>
          <CardTitle>Una luz para ti</CardTitle>
          <CardDescription>
            Este será tu espacio donde el tiempo y foco seas únicamente tú.
          </CardDescription>
          <CardLink href="#">
            Leer más <Arrow>➔</Arrow>
          </CardLink>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
};

export default FareTestSection;
