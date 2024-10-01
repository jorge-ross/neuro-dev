import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: white;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #123456;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #654321;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  max-width: 600px;
`;

const About = () => {
  return (
    <GeneralContainer>
      <Header />
      <AboutSection>
        <ProfileImage src="your-photo-url-here.jpg" alt="Tu nombre" />
        <Title>Acerca de Mí</Title>
        <Subtitle>Psicólogo Especializado en Neuropsicología</Subtitle>
        <Description>
          Soy un psicólogo especializado en neuropsicología con 8 años de experiencia. 
          Me dedico a ofrecer servicios de psicología basada en evidencia, ayudando 
          a las personas a superar sus retos mentales y emocionales con un enfoque científico
          y personalizado.
        </Description>
      </AboutSection>
      <Footer />
    </GeneralContainer>
  );
};

export default About;
