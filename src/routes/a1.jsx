import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import articleImageOne from "../assets/images/article-imgs/img-1.png";
import { typography } from "../styles/typography";

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 60%;
  align-self: center;
  justify-self: center;
  padding: 2rem 0 4rem;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const Title = styled.h1`
  ${typography.head.md};
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const Content = styled.div`
  line-height: 1.6;
  text-align: justify;
`;

const ImageContainer = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 1.5rem 0;
`

const SaludMental = () => {
  return (
    <>
      <Header />
      <ArticleContainer>
        <ImageContainer src={articleImageOne} alt="prelude" />
        <Title>Preludio 2.0</Title>
        <Content>
          <p>
            La salud mental es un aspecto fundamental del bienestar general de
            las personas. No solo afecta cómo pensamos, sentimos y actuamos en
            nuestra vida diaria, sino que también influye en cómo manejamos el
            estrés, nos relacionamos con los demás y tomamos decisiones.
          </p>
          <p>
            Cuidar de nuestra salud mental es tan importante como cuidar de
            nuestra salud física. Practicar hábitos saludables como el ejercicio
            regular, una dieta equilibrada y el descanso adecuado puede marcar
            una gran diferencia. Además, buscar apoyo profesional cuando sea
            necesario es clave para enfrentar desafíos emocionales o
            psicológicos.
          </p>
          <p>
            En Neuro-dev, creemos en la importancia de promover la salud mental
            y brindar herramientas para que las personas puedan alcanzar su
            máximo potencial. Recuerda: cuidar de tu mente es cuidar de ti
            mismo.
          </p>
        </Content>
      </ArticleContainer>
      <Footer />
    </>
  );
};

export default SaludMental;