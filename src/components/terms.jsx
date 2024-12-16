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
          <Option onClick={() => setShowCancellationModal(true)}>Políticas de cancelación</Option>
        </Section>
      <GralModal show={showModal} onClose={handleCloseModal}>
          <p>
            Aquí va el texto completo de tu aviso de privacidad. Este texto debe
            incluir todos los detalles sobre cómo manejas los datos personales,
            cómo se almacenan, quién tiene acceso, etc. Asegúrate de que este
            texto cumpla con las regulaciones de privacidad aplicables a tu
            región.
          </p>
          <p>
            También puedes incluir enlaces a secciones específicas de tu política
            de privacidad para mayor claridad y cualquier información de contacto
            en caso de que los usuarios tengan preguntas o inquietudes.
          </p>
        </GralModal>

        <GralModal show={showTermsModal} onClose={() => setShowTermsModal(false)}>
          <h2>Términos y Condiciones</h2>
          <p>... Your terms and conditions content ...</p>
        </GralModal>

        <GralModal show={showCancellationModal} onClose={() => setShowCancellationModal(false)}>
          <h2>Políticas de Cancelación</h2>
          <p>... Your cancellation policy content ...</p>
      </GralModal>
    </Gral>
  )
}

export default Terms;