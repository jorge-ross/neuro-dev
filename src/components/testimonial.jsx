import { useState } from 'react';
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
  margin: 2rem 0;

  @media (max-width: 600px) {
    ${typography.head.lg};
  }
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

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 2rem;
  min-width: 40%;
  transform: translateX(${(props) => props.translate}%);
  transition: transform 0.5s ease-in-out;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;

  ${(props) => (props.left ? "left: 1rem;" : "right: 1rem;")}

  &:hover {
    color: gray;
  }
`;

const TestimonialSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <SectionContainer>
        <SectionTitle>Los pacientes opinan</SectionTitle>
        <SliderContainer>
        {testimonials.map((testimonial, index) => (
          <Slide
            key={testimonial.id}
            translate={(index - currentIndex) * 100}
          >
            <p>{testimonial.text}</p>
            <p>
              <strong>- {testimonial.author}</strong>
            </p>
          </Slide>
        ))}
        <NavigationButton left onClick={prevSlide}>
          &#10094;
        </NavigationButton>
        <NavigationButton onClick={nextSlide}>
          &#10095;
        </NavigationButton>
      </SliderContainer>
    </SectionContainer>
  );
};

export default TestimonialSection;
