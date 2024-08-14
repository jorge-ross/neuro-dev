import styled from 'styled-components';
import savingsImage from '../assets/images/savings.png'
import psicImage from '../assets/images/psic.png'
import Header from '../components/header';

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const PromotionsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0d47a1;
  margin-bottom: 2rem;
`;

const PromotionWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PromotionCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: left;
`;

const PromotionImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PromotionContent = styled.div`
  padding: 1.5rem;
`;

const PromotionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1565c0;
  margin-bottom: 1rem;
`;

const PromotionDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Promotions = () => {
  return (
    <GeneralContainer>
      <Header />
    <PromotionsContainer>
      <Title>Promociones y Descuentos</Title>
      <PromotionWrapper>
        <PromotionCard>
          <PromotionImage src={savingsImage} alt="Promoción 1" />
          <PromotionContent>
            <PromotionTitle>Descuento del 20%</PromotionTitle>
            <PromotionDescription>
              Aprovecha nuestro descuento del 20% en tu primera sesión de terapia en línea. 
              ¡Comienza hoy mismo tu camino hacia una mejor salud mental!
            </PromotionDescription>
          </PromotionContent>
        </PromotionCard>

        <PromotionCard>
          <PromotionImage src={psicImage} alt="Promoción 2" />
          <PromotionContent>
            <PromotionTitle>Paquete de 5 Sesiones</PromotionTitle>
            <PromotionDescription>
              Obtén un paquete de 5 sesiones con un 15% de descuento. 
              Ideal para quienes buscan un seguimiento continuo en su proceso terapéutico.
            </PromotionDescription>
          </PromotionContent>
        </PromotionCard>
      </PromotionWrapper>
    </PromotionsContainer>
    </GeneralContainer>
  );
};

export default Promotions;
