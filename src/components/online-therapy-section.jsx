import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import convenienceIcon from '../assets/images/comodidad.png';
import accessibilityIcon from '../assets/images/accesibilidad.png';
import privacyIcon from '../assets/images/privacy.png';
import parkingIcon from '../assets/images/parking.png';
import { typography, typography2 } from '../styles/typography';
import { colors } from '../styles/colors';


const SectionContainer = styled.section`
  margin: 0;
  padding: 2.5rem 0;
  text-align: center;
  width: 50%;

  @media (max-width: 1000px) {
    width: 70%;
    padding-top: 1.5rem;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.lga};
  color: black;
  margin: 2rem 0 0;

  @media (max-width: 700px) {
    ${typography.head.lg};
    margin-top: 0;
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

const BenefitCard = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const BenefitImage = styled.img`
  max-width: 350px;
  height: auto;
  border-radius: 20px;

  @media(max-width: 1000px){
    max-width: 320px;
  }

  @media(max-width: 600px){
    max-width: 220px;
  }

  @media(max-width: 350px){
    max-width: 180px;
  }
`;

const BenefitText = styled.p`
  ${typography2.head.md}
  margin: 2rem 1rem;
  color: black;

  @media(max-width: 700px){
    ${typography2.head.sm};
  }
`;

const BenefitDescription = styled.p`
  ${typography2.text.lg}
  color: ${colors.grey[700]};
  margin: 0 0 2rem 0;
  width: 85%;

   @media(max-width: 700px){
    ${typography2.text.md};
  }
`;

const Arrow = styled.div`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 6rem;

  @media (max-width: 600px) {
    top: 28%;
    font-size: 4.5rem;
  }
    
  @media (max-width: 350px) {
    top: 26%;
    font-size: 4rem;
  }
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} style={{ right: '-20px' }}>›</Arrow>;
};

const PrevArrow = ({ onClick = () => { } }) => {
  return <Arrow onClick={onClick} style={{ left: '-20px' }}>‹</Arrow>;
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};


const OnlineTherapyBenefits = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };

  return (
    <SectionContainer>
      <SectionTitle>Beneficios de los servicios en línea</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>

          <BenefitCard>
            <BenefitImage src={convenienceIcon} alt="Conveniencia" />
            <BenefitText>Conveniencia</BenefitText>
            <BenefitDescription>Accede a sesiones de terapia desde la comodidad de tu hogar, sin necesidad de desplazarte.</BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <BenefitImage src={accessibilityIcon} alt="Accesibilidad" />
            <BenefitText>Accesibilidad</BenefitText>
            <BenefitDescription>La terapia en línea facilita el acceso a servicios terapéuticos a personas con movilidad reducida o en áreas remotas.</BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <BenefitImage src={privacyIcon} alt="Privacidad" />
            <BenefitText>Privacidad</BenefitText>
            <BenefitDescription>Mantén la privacidad y confidencialidad de tus sesiones en un entorno seguro y protegido.</BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <BenefitImage src={parkingIcon} alt="Parking" />
            <BenefitText>Olvídate de los estacionamientos</BenefitText>
            <BenefitDescription>Con la terapia en línea, no tienes que pagar por estacionamientos ni preocuparte por la seguridad de tu coche.</BenefitDescription>
          </BenefitCard>

        </Slider>
      </SliderContainer>
    </SectionContainer>
  );
};

export default OnlineTherapyBenefits;

