import styled from 'styled-components';
import { useState } from 'react';
import { typography } from '../styles/typography';
import GralModal from './modals/gral-modal';
import logow from '../assets/images/logow.png';

const Gral = styled.div`
  background: black;
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0;

   @media(max-width: 850px){
    flex-direction: column;
    gap: 0.2rem;
    padding: 1rem 0;
    align-items: center;
  }
  
`

const Section = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media(max-width: 850px){
   align-self: center;
  }

  @media(max-width: 500px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.5rem;
    padding-top: 0.5rem;
  }

    @media(max-width: 350px){
      grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h1`
  ${typography.text.xl}
  color: white;
  align-self: center;

  @media(max-width: 850px){
    margin: 0;
  }
`;

const Option = styled.p`
${typography.text.xss}
color: white;
display: block;
text-decoration: none;
text-align: center;
cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  margin-left: 2rem;

  @media (max-width: 850px) {
    gap: 0.5rem;
    margin: 0;
  }
`

const LogoImgCont = styled.img`
max-width: 2rem;
`


const Terms = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showCancellationModal, setShowCancellationModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <Gral>
      <BrandContainer>
        <LogoImgCont src={logow} alt="logo" />
        <SectionTitle>Neuro-dev 2025</SectionTitle>
      </BrandContainer>
      <Section>
        <Option onClick={handleOpenModal}>Aviso de privacidad</Option>
        <Option onClick={() => setShowTermsModal(true)}>Términos y condiciones</Option>
        <Option onClick={() => setShowCancellationModal(true)}>Promociones</Option>
      </Section>
      <GralModal show={showModal} onClose={handleCloseModal}>
        <h2>Aviso de Privacidad</h2>
        <p>
          Neuro-dev es responsable del tratamiento, uso y protección de sus datos personales, conforme a lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
        </p>
        <h3>
          Finalidades del tratamiento de datos personales
        </h3>
        <p>
          Los datos personales que se recaban serán utilizados con las siguientes finalidades:
        </p>
        <ul>
          <li>Proveer servicios de atención psicológica y/o neuropsicológica.</li>
          <li>Realizar evaluaciones clínicas, diagnósticos y tratamientos personalizados.</li>
          <li>Elaborar historiales clínicos y reportes profesionales.</li>
          <li>Dar seguimiento a los servicios solicitados.</li>
          <li>Agendar, confirmar o modificar citas.</li>
          <li>Atender dudas, comentarios o solicitudes de información.</li>
        </ul>
        <h3>
          Datos personales recabados
        </h3>
        <p>
          Para las finalidades antes mencionadas, se pueden recabar uno o más de los siguientes datos personales:
        </p>
        <ul>
          <li>Nombre completo</li>
          <li>Edad y fecha de nacimiento</li>
          <li>Teléfono y correo electrónico</li>
          <li>Datos de contacto de emergencia</li>
          <li>Información clínica</li>
          <li>Antecedentes médicos o familiares relevantes</li>
          <li>Historial académico u ocupacional (en caso de evaluaciones)</li>
        </ul>

        <p>
          De ser necesario, se podrá solicitar, también, información considerada como datos personales sensibles, particularmente relacionada con salud física o mental.
        </p>
        <h3>
          Transferencia de datos personales
        </h3>
        <p>
          Neuro-dev no compartirá sus datos personales con terceros, salvo en los casos previstos por la ley o cuando sea necesario para cumplir con las finalidades antes mencionadas.
        </p>
        <h3>
          Derechos ARCO
        </h3>
        <p>
          Usted tiene derecho a acceder, rectificar y cancelar sus datos personales, así como a oponerse al tratamiento de los mismos. Para ejercer estos derechos, deberá presentar una solicitud por escrito a nuestro responsable de protección de datos personales.
          La solicitud deberá contener:
        </p>
        <ul>
          <li>Nombre completo y firma del titular</li>
          <li>Descripción clara y precisa de los datos personales respecto de los cuales se busca ejercer alguno de los derechos ARCO</li>
          <li>Domicilio o medio electrónico para recibir la respuesta</li>
          <li>Documentos que acrediten la identidad del solicitante</li>
          <li>Cualquier otro elemento que facilite la localización de los datos personales</li>
        </ul>
        <p>
          Neuro-dev responderá a su solicitud en un plazo de 20 días hábiles, contados a partir de la fecha de recepción de la misma.
        </p>
        <h3>
          Cambios al aviso de privacidad
        </h3>
        <p>
          Neuro-dev se reserva el derecho a modificar el presente aviso de privacidad en cualquier momento.
          Le recomendamos revisar periódicamente nuestro aviso de privacidad para estar informado sobre cualquier cambio.
        </p>
      </GralModal>

      <GralModal show={showTermsModal} onClose={() => setShowTermsModal(false)}>
        <h2>Términos y Condiciones</h2>
        <p>... Your terms and conditions content ...</p>
      </GralModal>

      <GralModal show={showCancellationModal} onClose={() => setShowCancellationModal(false)}>
        <h2>Promociones</h2>
        <p>... Your cancellation policy content ...</p>
      </GralModal>
    </Gral>
  )
}

export default Terms;