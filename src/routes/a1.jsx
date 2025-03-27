import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  max-width: 800px;
  line-height: 1.6;
  text-align: justify;
`;

const SaludMental = () => {
  return (
    <>
      <Header />
      <ArticleContainer>
        <Title>Importancia de la Salud Mental</Title>
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