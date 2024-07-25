import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import convenienceIcon from '../assets/images/comodidad.png'; // Reemplaza con la ruta de tu icono
import accessibilityIcon from '../assets/images/accesibilidad.png'; // Reemplaza con la ruta de tu icono
import privacyIcon from '../assets/images/privacy.png'; // Reemplaza con la ruta de tu icono


const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
  width: 100%;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: #0d47a1;
  margin-bottom: 2rem;
`;

const BenefitsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px; /* Ajusta el ancho según sea necesario */
  padding: 1rem;
  text-align: center;
`;

const BenefitImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const BenefitText = styled.div`
  font-size: 1rem;
  color: #1565c0;
  text-align: center;
`;

const OnlineTherapyBenefits = () => {
  return (
    <SectionContainer>
      <SectionTitle>Beneficios de Tomar Terapia en Línea</SectionTitle>
      <BenefitsGrid>
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
      </BenefitsGrid>
    </SectionContainer>
  );
};

export default OnlineTherapyBenefits;
