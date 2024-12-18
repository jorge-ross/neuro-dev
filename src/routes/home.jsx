import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import IntroSection from "../components/intro-section";
import Mision from "../components/mision";
import OnlineTherapyBenefits from "../components/online-therapy-section";
import Terms from "../components/terms";
import ServicesComponent from "../components/services-component";


const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

function Home() {
  return (
    <GeneralContainer>
      <Header />
      <IntroSection />
      <ServicesComponent />
      <Mision />
      <OnlineTherapyBenefits />
      <Footer />
      <Terms />
    </GeneralContainer>
  )
}

export default Home;