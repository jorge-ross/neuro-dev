import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";

const GralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 75%;
  align-self: center;
  justify-self: center;
  padding: 0.5rem 0 4rem;

  @media (max-width: 600px) {
    width: 92%;
  }
`;

const Title = styled.h1`
  ${typography.head.xl}
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 800px) {
    ${typography.head.lgx}
  }

  @media (max-width: 500px) {
    ${typography.head.lga}
  }

  @media (max-width: 400px) {
    ${typography.head.md}
  }
`;

const ResourcesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 90%;
  align-self: center;
`;

const ResourceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border: 1px solid gold;
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 0.5rem;
  }
  @media (max-width: 300px) {
    padding: 0.25rem;
  }
  @media (max-width: 200px) {
    padding: 0.125rem;
  }
  @media (max-width: 100px) {
    padding: 0.0625rem;
  }
  h2 {
    ${typography.head.lg}
    margin: 1rem 0 0.5rem;
    color: white;
  }
  p {
    ${typography.text.md}
    color: white;
  }
`;

const Recursos = () => {
  return (
    <>
      <Header />
      <GralContainer>
        <Title>Recursos</Title>
        <ResourcesContainer>
          <ResourceCard to="/recursos/guia-psicologia">
            <h2>Guías</h2>
            <p>Descubre recursos útiles para tu bienestar integral.</p>
          </ResourceCard>
          <ResourceCard to="/recursos/guia-neuropsicologia">
            <h2>Tests Online</h2>
            <p>Herramientas psicológicas digitales.</p>
          </ResourceCard>
          <ResourceCard to="/recursos/guia-consultoria">
            <h2>Cursos</h2>
            <p>Recursos para mejorar tu práctica profesional.</p>
          </ResourceCard>
          <ResourceCard to="/recursos/guia-consultoria">
            <h2>Talleres y Webinars</h2>
            <p>Eventos formativos y de actualización.</p>
          </ResourceCard>
        </ResourcesContainer>
      </GralContainer>
      <Footer />
    </>
  );
};

export default Recursos;
