import styled from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import corp from '../assets/images/corp-route.png'
import corpOne from '../assets/images/corpOne.png'
import corpTwo from '../assets/images/corpTwo.png'
import corpThree from '../assets/images/corpThree.png'
import { typography, typography2 } from '../styles/typography';
import Footer from '../components/footer';

const GeneralContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 75%;
  align-self: center;
  justify-self: center;

  @media (max-width: 750px) {
    width: 80%;
  }
`


const TopContainer = styled.div`
  padding: 4.5rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 2.5rem;

  @media (max-width: 750px) {
    width: 90%;
    gap: 2rem;
    padding: 3.5rem 0 2rem 0;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`

const Title = styled.h1`
 ${typography.head.xl}
  color: black;
  margin: 0;
  align-self: center;

  @media (max-width: 750px) {
    ${typography.head.lgx}
  }

  @media (max-width: 600px) {
    ${typography.head.lga}
  }

  @media (max-width: 450px) {
    ${typography.head.md}
  }
`;

const CorpText = styled.p`
  ${typography2.text.md}
  color: black;
  text-align: justify;
  align-self: center;
  line-height: 1.7rem;
  margin: 0 0 2rem 0;

  @media (max-width: 450px) {
    ${typography2.text.sm}
  }
`;


const ServicesImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 150px;

  @media (max-width: 600px) {
    max-width: 100px;
  }
  
  @media (max-width: 450px) {
    max-width: 50px;
  }
`

const SubTitle = styled.h2`
  ${typography2.head.xls};
  width: 70%;
  color: black;
  margin: 0;

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    ${typography2.text.md}
  }
`;


const InfoTitle = styled.h2`
  ${typography2.head.xls};
  color: black;
  text-align: center;
  align-self: center;
  margin: 0;
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    ${typography2.text.md}
  }
`;

const BenefitsList = styled.ol`
  width: 75%;
  padding-left: 1.5rem;
  margin: 1.5rem 0 0.5rem 0;

  
  @media (max-width: 750px) {
    width: 85%;
  }

  li {
    ${typography2.text.md}
    color: black;
    margin-bottom: 1rem;
    list-style-type: square;

    @media (max-width: 450px) {
      ${typography2.text.sm}
    }
  }
`;

const CorpImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  justify-content: space-around;
`

const CorpImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 220px;
  padding: 2rem 0 3rem;
  border-radius: 50%;

  @media (max-width: 900px) {
    max-width: 180px;
  }
  
  @media (max-width: 750px) {
    max-width: 150px;
  }

  @media (max-width: 600px) {
    max-width: 120px;
  }

  @media (max-width: 500px) {
    max-width: 100px;
  }

  @media (max-width: 400px) {
    max-width: 80px;
  }
`


const ConsultancyServices = () => {

  return (
    <>
      <Header />
      <GeneralContainer>

        <TopContainer>
          <ServicesImg src={corp} />
          <Title>Consultoría</Title>
        </TopContainer>


        <CorpText>La consultoría en Recursos Humanos es un servicio profesional que tiene como
          objetivo ayudar a las organizaciones a optimizar la gestión de su capital humano.
          A través de estrategias, herramientas y metodologías especializadas,
          los consultores trabajan para mejorar procesos como el reclutamiento,
          la selección, la formación, el desarrollo organizacional, la retención
          de talento y la gestión del clima laboral. El fin último es alinear las
          prácticas de Recursos Humanos con los objetivos estratégicos del negocio,
          promoviendo un entorno laboral más productivo, saludable y sostenible.
        </CorpText>
        <SubTitle>Ventajas de integrar principios de la psicología clínica en la
          consultoría de Recursos Humanos</SubTitle>

        <BenefitsList>
          <li>
            <strong>Mejora del clima laboral:</strong><br /> Al aplicar técnicas basadas en la psicología, se pueden identificar y resolver conflictos de manera efectiva, creando un ambiente de trabajo más armónico y colaborativo.
          </li>
          <li>
            <strong>Mayor retención de talento:</strong><br /> Comprender las necesidades emocionales y profesionales de los colaboradores permite diseñar programas de engagement y retención más efectivos.
          </li>
          <li>
            <strong>Desarrollo de liderazgos más humanos:</strong><br /> Los líderes que comprenden principios psicológicos pueden gestionar a sus equipos con mayor empatía y eficacia, fomentando la confianza y la motivación.
          </li>
          <li>
            <strong>Prevención de riesgos psicosociales:</strong><br /> La aplicación de conocimientos clínicos ayuda a identificar y mitigar factores de estrés laboral, burnout o acoso, promoviendo entornos más saludables.
          </li>
          <li>
            <strong>Toma de decisiones basada en datos y emociones:</strong><br /> Combinar análisis cuantitativo con una comprensión profunda del comportamiento humano permite tomar decisiones más equilibradas y efectivas.
          </li>
        </BenefitsList>

        <CorpImgContainer>
          <CorpImg src={corpOne} />
          <CorpImg src={corpThree} />
          <CorpImg src={corpTwo} />
        </CorpImgContainer>
        <CorpText>La consultoría en Recursos Humanos, enriquecida con principios de la psicología clínica, no solo se enfoca en mejorar procesos organizacionales, sino también en entender y potenciar el factor humano. Este enfoque integral permite crear organizaciones más resilientes, productivas y comprometidas con el bienestar de sus colaboradores.

          ¿Listo para transformar tu empresa? ¡Contáctanos y descubre cómo podemos ayudarte!
        </CorpText>

        <InfoTitle>¡Puedes utilizar los mismos canales de contacto para solicitar información!</InfoTitle>
      </GeneralContainer>
      <Footer />
      <Terms />
    </>
  );
};

export default ConsultancyServices;
