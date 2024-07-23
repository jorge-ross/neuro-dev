import styled from 'styled-components';
import { colors } from '../styles/colors';

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

const Link = styled.a`
  display: block;
  color: blue;
  text-decoration: none;
  margin: 0.5rem 0;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.p`
  margin: 0.5rem 0;
  text-align: center;
  color: blue;
`;

const Footer = () => {
  return (
    <Gral>
      <FooterContainer>
        <Section>
          <SectionTitle>INFORMACIÓN PARA TÍ</SectionTitle>
          <Link href="#privacy">Aviso de privacidad</Link>
          <Link href="#terms">Términos y condiciones</Link>
          <Link href="#cancellation">Políticas de cancelación</Link>
        </Section>
        <Section>
          <SectionTitle>LA CONSULTA</SectionTitle>
          <Link href="#faq">Preguntas Frecuentes</Link>
          <Link href="#promotions">Promoción y descuentos</Link>
          <Link href="#modalities">Modalidades y tarifas</Link>
          <Link href="#advantages">Ventajas de Terapia Online</Link>
          <Link href="#therapies">Terapia</Link>
        </Section>
        <Section>
          <SectionTitle>TU PSICÓLOGO</SectionTitle>
          <Link href="#about">¿Quién soy?</Link>
        </Section>
        <Section>
          <SectionTitle>CONTACTO</SectionTitle>
          <ContactInfo>Sólo Whatsapp</ContactInfo>
          <ContactInfo>+52 55 5555 5555</ContactInfo>
          <ContactInfo>mi_mail@gmail.com</ContactInfo>
        </Section>
      </FooterContainer>
      </Gral>
  );
};

export default Footer;
