import styled from 'styled-components';
import { colors } from '../styles/colors';
import { useState } from 'react';
import { typography } from '../styles/typography';
import { Link } from 'react-router-dom';
import GralModal from './modals/gral-modal';

const Gral = styled.div`
background: ${colors.stone[100]};
width: 100%;
display: flex;
border-top: 1px solid black;
`

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem 0;
`;

const SectionTitle = styled.h3`
  ${typography.text.lg}
  font-size: 1.2rem;
  margin: 0;
  color: ${colors.black[900]};
  padding-bottom: 1rem;
  text-align: center;
`;

const Option = styled.p`
color: ${colors.blue[950]};
display: block;
text-decoration: none;
margin: 0.5rem 0;
text-align: center;
cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(Link)`
  align-items: center;
  text-decoration: none;
`;


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
      <Section>
          <SectionTitle>INFORMACIÓN PARA TÍ</SectionTitle>
          <Option onClick={handleOpenModal}>Aviso de privacidad</Option>
          <Option onClick={() => setShowTermsModal(true)}>Términos y condiciones</Option>
          <Option onClick={() => setShowCancellationModal(true)}>Políticas de cancelación</Option>
          <StyledLink to="/promotions" onClick={() => window.scrollTo(0, 0)}>
            <Option>Promoción y descuentos</Option>
          </StyledLink>
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