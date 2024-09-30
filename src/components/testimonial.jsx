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
  border: 1px solid black;
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 320px;
  border-radius: 10px;
`;

const CardLabel = styled.div`
  color: ${colors.blue[900]};
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: bold;

`;

const CardTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #123456;
  margin: 0.5rem 0;
  min-height: 50px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  color: #654321;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
  text-overflow: ellipsis;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const TestimonialSection = () => {
  return (
    <SectionContainer>
        <CardLabel>Lo que los pacientes opinan</CardLabel>
        <CardsContainer>
          {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <p>{testimonial.text}</p>
            <p><strong>- {testimonial.author}</strong></p>
          </Card>
        ))}
        </CardsContainer>
    </SectionContainer>
  );
};

export default TestimonialSection;
