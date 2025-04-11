import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import convenienceIcon from '/assets/images/comodidad.png';
import accessibilityIcon from '/assets/images/accesibilidad.png';
import privacyIcon from '/assets/images/privacy.png';
import parkingIcon from '/assets/images/parking.png';
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';


const SectionContainer = styled.section`
  margin: 0;
  padding: 2.5rem 0 2rem;
  text-align: center;
  width: 50%;

  @media(max-width: 1000px){
    padding: 1.5rem 0 0 0;
    width: 85%;
    border-bottom: 1px solid black;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.lga};
  color: black;
  margin: 1rem 0 0;

  @media (max-width: 1000px) {
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
    margin: 0 1.5rem;
  }
`;

const BenefitCard = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const BenefitImage = styled.img`
  max-width: 350px;
  height: auto;
  border-radius: 20px;

  @media(max-width: 1000px){
    max-width: 320px;
  }

  @media(max-width: 750px){
    max-width: 275px;
  }

  @media(max-width: 600px){
    max-width: 220px;
  }

  @media(max-width: 400px){
    max-width: 180px;
  }
`;

const BenefitText = styled.p`
  ${typography2.head.md}
  margin: 2rem 1rem;
  color: black;

  @media(max-width: 1000px){
    margin: 2rem 0 1rem 0;
  }

  @media(max-width: 700px){
    ${typography2.head.sm};
    width: 110%;
  }
`;

const BenefitDescription = styled.p`
  ${typography2.text.lg}
  color: ${colors.grey[700]};
  margin: 0;
  width: 85%;

  @media(max-width: 1000px){
    padding-bottom: 1.2rem;
  }

   @media(max-width: 700px){
    ${typography2.text.md};
    width: 100%;
  }
`;

const Arrow = styled.div`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 34%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 6rem;

  ${({ direction }) => direction === "next" && `right: -20px;`}
  ${({ direction }) => direction === "prev" && `left: -20px;`}

  @media (max-width: 1000px) {
    top: 33%;
    ${({ direction }) => direction === "next" && `right: 20px;`}
    ${({ direction }) => direction === "prev" && `left: 20px;`}
  }

  @media (max-width: 600px) {
    top: 31%;
  }

  @media (max-width: 500px) {
    font-size: 4.5rem;
  }
    
  @media (max-width: 380px) {
    top: 26%;
    font-size: 4rem;
  }
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} direction="next">›</Arrow>;
};

const PrevArrow = ({ onClick = () => { } }) => {
  return <Arrow onClick={onClick} direction="prev">‹</Arrow>;
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};


const OnlineServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
        },
      }
    ],
  };

  return (
    <SectionContainer>
      <SectionTitle>Beneficios de los servicios en línea</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>

          <BenefitCard>
            <BenefitImage src={convenienceIcon} alt="Conveniencia" />
            <BenefitText>Conveniencia</BenefitText>
            <BenefitDescription>Accede a las sesiones desde la comodidad de tu hogar, sin necesidad de desplazarte.</BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <BenefitImage src={accessibilityIcon} alt="Accesibilidad" />
            <BenefitText>Accesibilidad</BenefitText>
            <BenefitDescription>El servicio en línea facilita el acceso a personas con movilidad reducida o en áreas remotas.</BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <BenefitImage src={privacyIcon} alt="Privacidad" />
            <BenefitText>Privacidad</BenefitText>
            <BenefitDescription>Mantén la privacidad y confidencialidad de tus sesiones en un entorno seguro y protegido.</BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <BenefitImage src={parkingIcon} alt="Parking" />
            <BenefitText>Sin estacionamientos</BenefitText>
            <BenefitDescription>Olvídate de pagar estacionamientos y de preocuparte por la seguridad de tu coche.</BenefitDescription>
          </BenefitCard>

        </Slider>
      </SliderContainer>
    </SectionContainer>
  );
};

export default OnlineServices;

