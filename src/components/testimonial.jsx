import styled from 'styled-components';
import { Link } from 'react-router-dom';
import testimonials from '../data/testimonials';
import { typography } from '../styles/typography';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h1`
  ${typography.head.lgx}
  color: black;
  margin: 2rem 0 3rem;
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
        <SectionTitle>Los pacientes opinan</SectionTitle>
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
