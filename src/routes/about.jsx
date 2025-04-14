import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import profile_pic from "/assets/images/profile_pic.jpg"
import neurodev_pic from "/assets/images/logond.png"
import { typography, typography2 } from "../styles/typography";
import Terms from "../components/terms";
import descriptionText from '../data/about';
import { CedulaProfAbout } from "../data/definitions";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 85%;
  align-self: center;
  justify-self: center;

  @media (max-width: 750px) {
    width: 90%;
  }
`

const AboutSection = styled.section`
  padding: 3.5rem 0 4rem;
  width: 77%;
  display: grid;
  grid-gap: 1rem;
  column-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  align-self: center;

  @media (max-width: 1000px){
    width: 95%;
  }

  @media (max-width: 750px){
    display: flex;
    flex-direction: column;
    padding: 2rem 0 2.5rem;
    align-items: start;
  }
`;

const ProfileImage = styled.img`
  width: 91%;
  border-radius: 15%;
  justify-self: center;
  align-self: center;

  @media (max-width: 750px) {
    width: 100%;
    max-width: 140px;
    justify-self: start;
    align-self: start;
  }

`;

const NeurodevImage = styled.img`
  width: 70%;
  border-radius: 40%;
  justify-self: center;
  align-self: center;
  opacity: 0.9;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Description = styled.div`
  ${typography.text.md};
  grid-column: 2 / 4;
  grid-row: 2 / 5;
  text-align: justify;
  align-self: start;
  white-space: pre-line;
  line-height: 1.5rem;
  width: 95%;
  padding: 1rem 0;

  @media (max-width: 750px) {
    grid-column: 1 / 3;
    grid-row: 3;
    align-self: center;
    justify-self: center;
    text-align: justify;
    padding: 0.25rem 0;
    width: 100%;
  }

  @media (max-width: 500px) {
    ${typography.text.sm};
  }
`;

const ProfesionalDetails = styled.p`
  ${typography.text.sm};
  text-align: left;
  align-self: flex-start;
  padding-top: 1.5rem;
  margin: 0;
`

const Card = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  gap: 2rem;
  grid-row: 1 / 3;
`

const Title = styled.h1`
  ${typography.head.md};
  color: black;
  margin: 0;

  @media (max-width: 750px){
    align-self: start;
  }

  @media (max-width: 500px){
    ${typography2.head.sm};
  }
`;

const Subtitle = styled.h2`
  ${typography2.head.sm};
  color: gray;
  margin: 0;

  @media (max-width: 750px){
    margin: 0.5rem 0 0 0;
    align-self: start;
    line-height: 1.5rem;
  }

  @media (max-width: 500px){
    ${typography2.head.xs};
    font-weight: 500;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1;
  grid-column: 2 / 4;

  @media (max-width: 750px){
    grid-row: 1 / 3;
    grid-column: 2;
    align-items: center;
    justify-content: center;
  }
`

const GridItemWrapper = styled.div`
  display: contents;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

const About = () => {
  return (
    <>
      <Header />
      <GeneralContainer>
        <AboutSection>
          <GridItemWrapper>
            <Card>
              <ProfileImage src={profile_pic} alt="npsic" />
              <NeurodevImage src={neurodev_pic} alt="ndev" />
            </Card>

            <Titles>
              <Title>Jorge Rosano</Title>
              <Subtitle>Director y fundador de Neuro-dev</Subtitle>
            </Titles>
          </GridItemWrapper>
          <Description>
            {descriptionText}
            <ProfesionalDetails>
              Ced. Prof: {CedulaProfAbout}
              < br />
              Ced. Esp: En proceso de homologación
              {" ("}
              <a
                href="/doc/neu-t.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >título especialidad</a>
              {")"}.
            </ProfesionalDetails>
          </Description>

        </AboutSection>
      </GeneralContainer>
      <Footer />
      <Terms />
    </>
  );
};

export default About;
