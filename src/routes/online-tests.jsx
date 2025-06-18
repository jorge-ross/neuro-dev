import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";
import { tests } from "../data/tests";
import Terms from "../components/terms";

const GralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 75%;
  align-self: center;
  justify-self: center;
  padding: 0.5rem 0 4rem;

  @media (max-width: 800px) {
    width: 92%;
  }
`;

const Title = styled.h1`
  ${typography.head.xl}
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 700px) {
    ${typography.head.lga}
  }

  @media (max-width: 400px) {
    ${typography.head.md}
  }
`;

const TestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
  align-self: center;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const ResourceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: rgb(225, 225, 225);
  border-bottom: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
  justify-content: center;
  height: 85px;

  &:hover {
    transform: scale(1.02);
    background-color: rgb(218, 218, 218);
  }

  h2 {
    ${typography.head.lg}
    margin: 0;
    color: black;

    @media (max-width: 1000px) {
      ${typography.head.sm}
      margin: 0;
    }

    @media (max-width: 400px) {
      ${typography.head.xs}
      margin: 0;
    }
  }
  p {
    ${typography.text.lg}
    color: black;
    margin: 0.4rem 0;

    @media (max-width: 400px) {
      ${typography.text.md}
    }
  }
`;

const OnlineTests = () => {
  return (
    <>
      <Header />
      <GralContainer>
        <Title>Tests Online</Title>
        <TestsContainer>
          {tests.map((test) => (
            <ResourceCard key={test.id} to={test.url}>
              <h2>{test.name}</h2>
              <p>{test.description}</p>
            </ResourceCard>
          ))}
        </TestsContainer>
      </GralContainer>
      <Footer />
      <Terms />
    </>
  );
};

export default OnlineTests;
