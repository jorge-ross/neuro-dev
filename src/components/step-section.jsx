import styled from 'styled-components';
import step1Icon from '../assets/images/register.png'; // Reemplaza con la ruta de tu icono
import step2Icon from '../assets/images/mailme.png'; // Reemplaza con la ruta de tu icono
import step3Icon from '../assets/images/chat.png'; // Reemplaza con la ruta de tu icono

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
  color: #123456; // Reemplaza con el color que desees
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.h2`
  font-size: 1.2rem;
  color: #654321; // Reemplaza con el color que desees
  margin-bottom: 2rem;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 250px;
`;

const StepIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  color: #123456; // Reemplaza con el color que desees
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #654321; // Reemplaza con el color que desees
`;

const DashedLine = styled.div`
  width: 100%;
  height: 2px;
  border-top: 2px dashed #123456; // Reemplaza con el color que desees
  margin: 2rem 0;
`;

const StepSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>EL CAMINO A TU PRIMER CONSULTA PSICOLÓGICA</SectionTitle>
      <SectionSubtitle>Inicia tu terapia psicológica en 3 sencillos pasos</SectionSubtitle>
      <StepsContainer>
        <StepCard>
          <StepIcon src={step1Icon} alt="Paso 1" />
          <StepTitle>Paso 1. Envía un mensaje</StepTitle>
          <StepDescription>
            Contáctanos y cuéntanos cuál es el reto al que te estás enfrentando.
          </StepDescription>
        </StepCard>
        <DashedLine />
        <StepCard>
          <StepIcon src={step2Icon} alt="Paso 2" />
          <StepTitle>Paso 2. Selecciona el Día</StepTitle>
          <StepDescription>
            Selecciona el día y hora que más te convenga para tu terapia.
          </StepDescription>
        </StepCard>
        <DashedLine />
        <StepCard>
          <StepIcon src={step3Icon} alt="Paso 3" />
          <StepTitle>Paso 3. Alcanza la Cima</StepTitle>
          <StepDescription>
            Elegiremos al terapeuta ideal para guiarte y te estará esperando en tu primer cita.
          </StepDescription>
        </StepCard>
      </StepsContainer>
    </SectionContainer>
  );
};

export default StepSection;
