import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import profile_pic from "/assets/images/profile_pic_npsic_.jpg"
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
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 0 2.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 91%;
  border-radius: 5%;
  justify-self: center;
  align-self: center;

  @media (max-width: 750px) {
    width: 70%;
    border-radius: 50%;
    justify-self: end;
  }

  @media (max-width: 450px) {
    width: 75%;
  }

`;

const NeurodevImage = styled.img`
  width: 70%;
  border-radius: 40%;
  justify-self: center;
  align-self: center;

  @media (max-width: 750px) {
    width: 70%;
    border-radius: 50%;
    justify-self: start;
  }

  @media (max-width: 450px) {
    width: 75%;
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

  @media (max-width: 750px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row: 2;
    grid-column: 1 / 3;
    flex-direction: row;
  }

  & > img:first-of-type {
    grid-column: 1;
  }

  & > img:last-of-type {
      grid-column: 2;
    }
`

const Title = styled.h1`
  ${typography.head.md};
  color: black;
  margin: 0;

  @media (max-width: 750px){
    margin: 1.5rem 0 0 0;
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
  }

  @media (max-width: 500px){
    ${typography2.head.xs};
    margin: 0;
    font-weight: 500;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1;
  grid-column: 2 / 4;

  @media (max-width: 750px){
    grid-row: 1;
    grid-column: 1 / 3;
    align-items: center;
    justify-content: center;
  }
`

const About = () => {
  return (
    <>
      <Header />
      <GeneralContainer>
        <AboutSection>
          <Card>
            <ProfileImage src={profile_pic} alt="npsic" />
            <NeurodevImage src={neurodev_pic} alt="ndev" />
          </Card>

          <Titles>
            <Title>Jorge Rosano</Title>
            <Subtitle>Director y fundador de Neuro-dev</Subtitle>
          </Titles>

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
