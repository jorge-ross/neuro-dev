import styled from 'styled-components';
import { useState } from 'react';
import { colors } from '../styles/colors';
import GralModal from './modals/gral-modal';
import { Link } from 'react-router-dom';

const Gral = styled.div`
background: ${colors.stone[200]};
width: 100%;
display: flex;
justify-content: center;
border-top: 1px solid black;
`

const FooterContainer = styled.footer`
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  width: 80%
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: blue;
  padding-bottom: 1rem;
  text-align: center;
`;

const ContactInfo = styled.p`
  margin: 0.5rem 0;
  text-align: center;
  color: blue;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const Footer = () => {
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
      <FooterContainer>
        <Section>
          <SectionTitle>INFORMACIÓN PARA TÍ</SectionTitle>
          <Option onClick={handleOpenModal}>Aviso de privacidad</Option>
          <Option onClick={() => setShowTermsModal(true)}>Términos y condiciones</Option>
          <Option onClick={() => setShowCancellationModal(true)}>Políticas de cancelación</Option>
        </Section>
        <Section>
          <SectionTitle>LA CONSULTA</SectionTitle>
          <Option>Preguntas Frecuentes</Option>
          <Option>Promoción y descuentos</Option>
          <Option>Modalidades y tarifas</Option>
          <Option>Ventajas de Terapia Online</Option>
          <Option>Terapia</Option>
        </Section>
        <Section>
          <SectionTitle>TU PSICÓLOGO</SectionTitle>
          <StyledLink to="/about" onClick={() => window.scrollTo(0, 0)}>
            <Option>¿Quién soy?</Option>
          </StyledLink>
        </Section>
        <Section>
          <SectionTitle>CONTACTO</SectionTitle>
          <ContactInfo>Sólo Whatsapp</ContactInfo>
          <ContactInfo>+52 55 5555 5555</ContactInfo>
          <ContactInfo>mi_mail@gmail.com</ContactInfo>
        </Section>
      </FooterContainer>

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
  );
};

export default Footer;
