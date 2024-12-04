import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import profile_pic from "../assets/images/profile_pic_npsic.jpg"
import { typography } from "../styles/typography";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 9rem 2rem 0;
`

const AboutSection = styled.section`
  width: 75%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding-bottom: 4rem;
`;

const ProfileImage = styled.img`
  width: 50%;
  border-radius: 20%;
  justify-self: center;
  align-self: center;
`;

const Title = styled.h1`
  ${typography.head.lg};
  text-align: center;
  color: black;
  margin-bottom: 1rem;
  grid-column: 2 / 4;
  grid-row: 1;

`;

const Name = styled.h2`
  ${typography.head.sm};
  color: black;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  ${typography.text.lg};
  grid-column: 2 / 4;
  grid-row: 2 / 5;
  text-align: justify;
  align-self: flex-start;
`;

const ProfesionalDetails = styled.div`
  ${typography.text.md};
  text-align: center;
  grid-row: 3;
  grid-column: 1;
`

const Card = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  gap: 1rem;
  grid-row: 1 / 3;
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
        <Title>Acerca de Mí</Title>
        <ProfesionalDetails>
          Ced. Prof: 000000
          < br/>
          Ced. Esp: En proceso de homologación
          < br/>
          (Ya saben lo lenta que suele ser la burocracia)
          < br/>
          < br/>
          Mientras tanto...
          <br /> 
          pueden consultar mi título español {" "}
          <a
            href="/doc/neu-t.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >aquí</a>.
        </ProfesionalDetails>
        <Description>
          Soy un psicólogo especializado en neuropsicología con 8 años de experiencia. 
          Me dedico a ofrecer servicios de psicología basada en evidencia, ayudando 
          a las personas a superar sus retos mentales y emocionales con un enfoque científico
          y personalizado.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </Description>
      </AboutSection>
      <Footer />
    </GeneralContainer>
  );
};

export default About;
