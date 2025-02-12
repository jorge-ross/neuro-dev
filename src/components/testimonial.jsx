import PropTypes from 'prop-types';
import styled from 'styled-components';
import testimonials from '../data/testimonials';
import { typography } from '../styles/typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from '../styles/colors';

const SectionContainer = styled.section`
  margin: 0;
  padding: 2.5rem 0 5rem;
  text-align: center;
  width: 70%;

  @media (max-width: 1000px) {
    width: 70%;
    padding-top: 1.5rem;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.lgx}
  color: black;
  margin: 2rem 0;

  @media (max-width: 600px) {
    ${typography.head.lg};
  }
`;

const SliderContainer = styled.div`
  .slick-slide > div {
    display: flex;
    margin: 0 1rem;
    justify-content: center;
  }
  .slick-list {
    margin: 0 -1.5rem;
  }
`;

const Arrow = styled.div`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 4rem;

  @media (max-width: 600px) {
    top: 45%;
  }
    
`;

const OpCard = styled.div`
  display: flex;
  align-content: center;
  text-align: left;
  padding: 2rem;
  max-width: 300px;
  height: 150px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(64, 64, 64, 0.4);
  margin: 1rem;

  p {
    margin: 0;
    ${typography.text.md};
    color: ${colors.stone[100]};
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }

  p:last-child {
    margin-top: 0.5rem;
    font-weight: bold;
    color: ${colors.stone[400]};
    
  }

  @media (max-width: 600px) {
    height: 120px;
  }
`;



const NextArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} style={{ right: '-40px' }}>›</Arrow>;
};

const PrevArrow = ({ onClick = () => { } }) => {
  return <Arrow onClick={onClick} style={{ left: '-40px' }}>‹</Arrow>;
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

const TestimonialSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <SectionContainer>
      <SectionTitle>Los pacientes opinan</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <OpCard key={testimonial.id}>
              <p>{testimonial.text}</p>
              <p>{testimonial.author}</p>
            </OpCard>
          ))}
        </Slider>
      </SliderContainer>
    </SectionContainer>
  );
};

export default TestimonialSection;