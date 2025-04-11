import styled from 'styled-components';
import { useState } from 'react';
import { typography } from '../styles/typography';
import GralModal from './modals/gral-modal';
import logow from '/assets/images/logow.png';

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
  const [showPromoModal, setShowPromoModal] = useState(false);

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
        <Option onClick={() => setShowPromoModal(true)}>Promociones</Option>
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
        <p>Bienvenido(a) a Neuro-dev. Te pedimos leer cuidadosamente los siguientes términos y condiciones, ya que al acceder, navegar o utilizar este sitio, aceptas estar sujeto(a) a los presentes términos. Si no estás de acuerdo con ellos, por favor abstente de utilizar este sitio web.</p>
        <h3>1. Uso del sitio</h3>
        <p>Este sitio tiene como finalidad proporcionar información general sobre los servicios profesionales de psicología y neuropsicología clínica, así como ofrecer medios de contacto para la solicitud de citas, orientación o información adicional.</p>
        <h3>2. Uso adecuado del sitio</h3>
        <p>El usuario se compromete a utilizar el sitio web de manera lícita, ética y respetuosa, absteniéndose de realizar cualquier acto que pueda dañar, inutilizar o deteriorar el funcionamiento del sitio o afectar a otros usuarios. Queda prohibido el uso del sitio para fines ilegales, fraudulentos o contrarios a la buena fe y al orden público.</p>
        <h3>3. Propiedad intelectual</h3>
        <p>Todo el contenido del sitio, incluyendo textos, imágenes, logotipos y gráficos, son propiedad de Neuro-dev o de sus respectivos propietarios. Queda prohibida la reproducción total o parcial del contenido sin autorización previa.</p>
        <h3>4. Servicios profesionales</h3>
        <p>La información publicada no sustituye en ningún momento una consulta profesional directa. Los diagnósticos, evaluaciones y tratamientos solo se realizan en el contexto de una intervención formal con el profesional responsable, ya sea de manera presencial o virtual, previa cita y consentimiento informado.</p>
        <h3>5. Enlaces a terceros</h3>
        <p>El sitio puede contener enlaces a otros sitios web de terceros. Neuro-dev no se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios. Te recomendamos revisar los términos y condiciones de cada sitio que visites.</p>
        <h3>6. Modificaciones</h3>
        <p>Neuro-dev se reserva el derecho a modificar, actualizar o eliminar cualquier parte del sitio y de los presentes términos y condiciones en cualquier momento y sin previo aviso. Te recomendamos revisar periódicamente este documento para estar al tanto de cualquier cambio.</p>
      </GralModal>

      <GralModal show={showPromoModal} onClose={() => setShowPromoModal(false)}>
        <h2>Promociones 2025</h2>
        <h3>1. Promoción de 4 consultas</h3>
        <p>Pagando 3 consultas, la 4ta va al 50%. Aplica sólo en pago de contado.</p>
        <h3>2. Promoción de 8 consultas</h3>
        <p>Pagando 6 consultas, las 2 restantes van al 50%. Aplica sólo en pago de contado.</p>
        <br />
        <h3>Convenios y descuentos</h3>
        <p>Neuro-dev ofrece convenios y descuentos especiales para instituciones educativas, organizaciones y referidos. Para más información, por favor contáctanos directamente.</p>
      </GralModal>
    </Gral>
  )
}

export default Terms;