import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import convenienceIcon from '../assets/images/comodidad.png'; 
import accessibilityIcon from '../assets/images/accesibilidad.png';
import privacyIcon from '../assets/images/privacy.png';
import parkingIcon from '../assets/images/parking.png';
import { typography } from '../styles/typography';


const SectionContainer = styled.section`
  padding: 1rem 2rem;
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
`;

const SliderContainer = styled.div`
  .slick-slide > div {
    display: flex;
    margin: 0 1rem;
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
  padding: 1rem;
`;

const BenefitImage = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const BenefitText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #1565c0;
  text-align: center;
  width: 90%;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #0d47a1;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const NextArrow = (props) => {
  const { onClick } = props;
  return <Arrow onClick={onClick} style={{ right: '-35px' }}>›</Arrow>;
};

const PrevArrow = ({ onClick = () => {} }) => {
  return <Arrow onClick={onClick} style={{ left: '-35px' }}>‹</Arrow>;
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
            <BenefitText>
              <h3>Conveniencia</h3>
              <p>Accede a sesiones de terapia desde la comodidad de tu hogar, sin necesidad de desplazarte.</p>
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitImage src={accessibilityIcon} alt="Accesibilidad" />
            <BenefitText>
              <h3>Accesibilidad</h3>
              <p>La terapia en línea facilita el acceso a servicios terapéuticos, especialmente para personas con movilidad reducida o en áreas remotas.</p>
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitImage src={privacyIcon} alt="Privacidad" />
            <BenefitText>
              <h3>Privacidad</h3>
              <p>Mantén la privacidad y confidencialidad de tus sesiones en un entorno seguro y protegido.</p>
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitImage src={parkingIcon} alt="Parking" />
            <BenefitText>
              <h3>Olvídate de los estacionamientos</h3>
              <p>Con la terapia en línea, no tienes que pagar por estacionamientos ni preocuparte por la seguridad de tu coche. Disfruta de tus sesiones desde la comodidad de tu hogar.</p>
            </BenefitText>
          </BenefitCard>
        </Slider>
      </SliderContainer>
    </SectionContainer>
  );
};

export default OnlineTherapyBenefits;

