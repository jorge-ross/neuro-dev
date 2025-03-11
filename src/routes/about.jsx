import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import profile_pic from "../assets/images/profile_pic_npsic.png"
import { typography } from "../styles/typography";
import Terms from "../components/terms";
import descriptionText from '../data/about';
import { CedulaProfAbout } from "../data/definitions";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const AboutSection = styled.section`
  margin: 9rem 2rem 4rem 2rem;
  width: 75%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media (max-width: 1000px){
    width: 95%;
  }

  @media (max-width: 750px){
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 55%;
  border-radius: 40%;
  justify-self: center;
  align-self: center;
`;

const Title = styled.h1`
  ${typography.head.lg};
  text-align: center;
  color: black;
  margin: 0 0 0.5rem 0;
  grid-column: 2 / 4;
  grid-row: 1;

  @media (max-width: 750px){
    margin: 1.5rem 0 0 0;
    align-self: flex-start;
  }
`;

const Name = styled.h2`
  ${typography.head.sm};
  color: black;
  text-align: center;
`;

const Description = styled.p`
  ${typography.text.lg};
  grid-column: 2 / 4;
  grid-row: 2 / 5;
  text-align: justify;
  align-self: flex-start;
  white-space: pre-line;
`;

const ProfesionalDetails = styled.div`
  ${typography.text.md};
  text-align: center;
  grid-row: 3;
  grid-column: 1;

  @media (max-width: 750px){
    text-align: left;
    align-self: flex-start;
    border-top: 1px solid black;
    padding-top: 1.5rem;
  }
`

const Card = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  gap: 1rem;
  grid-row: 1 / 3;

  @media (max-width: 750px){
    border-bottom: 1px solid black;
  }
`

const About = () => {
  return (
    <GeneralContainer>
      <Header />
      <AboutSection>
        <Card>
          <ProfileImage src={profile_pic} alt="npsic" />
          <Name>Jorge Rosano</Name>
        </Card>
        <Title>Acerca de mí</Title>
        <Description>
          {descriptionText}
        </Description>
        <ProfesionalDetails>
          Ced. Prof: {CedulaProfAbout}
          < br />
          Ced. Esp: En proceso de homologación
          < br />
          < br />
          Mientras tanto...
          <br />
          pueden consultar mi título español {" "}
          <a
            href="/doc/neu-t.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >aquí</a>.
        </ProfesionalDetails>
      </AboutSection>
      <Footer />
      <Terms />
    </GeneralContainer>
  );
};

export default About;
