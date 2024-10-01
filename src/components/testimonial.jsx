import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles/colors';
import testimonials from '../data/testimonials';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h1`
  color: ${colors.blue[900]};
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  align-self: flex-start;
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
  border: 1px solid black;
  border-radius: 2rem;
`;


const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  align-self: flex-end;
  padding: 1rem;
`;

const TestimonialSection = () => {
  return (
    <SectionContainer>
        <SectionTitle>Lo que los pacientes opinan</SectionTitle>
        <CardsContainer>
          {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <p>{testimonial.text}</p>
            <p><strong>- {testimonial.author}</strong></p>
          </Card>
        ))}
        </CardsContainer>
        <StyledLink>Ver todas las opiniones →</StyledLink>
    </SectionContainer>
  );
};

export default TestimonialSection;
