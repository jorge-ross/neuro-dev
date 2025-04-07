import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import testimonials from '../data/testimonials';
import { typography } from '../styles/typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from '../styles/colors';
import { FaStar, FaTimes } from 'react-icons/fa';


const SectionContainer = styled.section`
  margin: 0;
  padding: 2rem 0 6rem;
  text-align: center;
  width: 70%;


  @media (max-width: 1000px) {
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
    padding-bottom: 1.5rem;

    @media (max-width: 471px) {
    padding-bottom: 3.5rem;
    }

  }
  .slick-list {
    margin: 0 -1.5rem;
  }
`;

const Arrow = styled.div`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 44%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 4rem;

  @media (max-width: 700px) {
    top: 42%;
  }

  @media (max-width: 471px) {
    top: 38%;
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
    margin: 0 0 1rem 0;
    ${typography.text.md};
    color: ${colors.stone[100]};
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }

  .author {
    ${typography.text.sm};
    margin-top: 0.5rem;
    font-weight: bold;
    color: ${colors.stone[400]};
    
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    height: 120px;
  }
`;


const StarRating = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.75rem;

  svg {
    color: gold;
    margin: 0 0.1rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h2 {
    ${typography.head.md};
    margin: 1rem 0;
  }

  p {
    ${typography.text.md};
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: ${colors.stone[400]};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${colors.stone[500]};
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

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
      <SectionTitle>Algunas experiencias compartidas.</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <OpCard key={testimonial.id} onClick={() => openModal(testimonial)}>
              <p>{testimonial.text}</p>
              <p className='author'>{testimonial.author}</p>
              <StarRating>
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </StarRating>
            </OpCard>
          ))}
        </Slider>
      </SliderContainer>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            <h2>{selectedTestimonial.author}</h2>
            <p>{selectedTestimonial.text}</p>
          </ModalContent>
        </ModalOverlay>
      )}

    </SectionContainer>
  );
};

export default TestimonialSection;