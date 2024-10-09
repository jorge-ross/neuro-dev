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
  margin: 1rem 2rem;
  background-color: white;
  text-align: center;
  width: 50%;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const SectionTitle = styled.h1`
  ${typography.head.lgx};
  color: black;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    ${typography.head.lg};
  }

  @media (max-width: 400px) {
    ${typography.head.md};
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
  padding-top: 1rem;
`;

const BenefitImage = styled.img`
  max-width: 220px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 1rem;

  @media(max-width: 320px){
    max-width: 120px;
  }
`;

const BenefitText = styled.p`
  ${typography2.head.xss}
  margin: 2rem 1rem 1rem;
  color: black;
`;

const BenefitDescription = styled.p`
  ${typography2.text.md}
  color: ${colors.grey[700]};
  margin: 0 0 1rem 0;
  width: 85%;
`;

const Arrow = styled.div`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 6rem;

  @media (max-width: 600px) {
    top: 30%;
    font-size: 4rem;
  }
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} style={{ right: '-20px'}}>›</Arrow>;
};

const PrevArrow = ({ onClick = () => {} }) => {
  return <Arrow onClick={onClick} style={{ left: '-20px'}}>‹</Arrow>;
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
      <SectionTitle>Beneficios de Tomar Terapia en Línea</SectionTitle>
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

