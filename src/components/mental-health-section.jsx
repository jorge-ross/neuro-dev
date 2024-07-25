import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const QuoteContainer = styled.div`
  flex: 1;
  margin: 1rem;
  padding: 2rem;
  background-color: #e0f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Quote = styled.p`
  font-size: 1.5rem;
  color: #00796b;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #004d40;
  margin-top: 1rem;
`;

const TextContainer = styled.div`
  flex: 1;
  margin: 1rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #123456;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #654321;
`;

const MentalHealthSection = () => {
  return (
    <SectionContainer>
      <QuoteContainer>
        <Quote>
          "La salud mental no es un destino, sino un proceso. Es sobre cómo conduces, no sobre a dónde vas."
        </Quote>
        <Author>- Noam Shpancer</Author>
      </QuoteContainer>
      <TextContainer>
        <Title>Importancia de Cuidar la Salud Mental</Title>
        <Text>
          La salud mental es fundamental para nuestro bienestar general. Afecta cómo pensamos, sentimos y actuamos en nuestra vida diaria. Cuidar nuestra salud mental nos ayuda a manejar el estrés, relacionarnos con los demás y tomar decisiones saludables. Es esencial darle la misma importancia que a nuestra salud física para vivir una vida equilibrada y satisfactoria.
        </Text>
      </TextContainer>
    </SectionContainer>
  );
};

export default MentalHealthSection;
