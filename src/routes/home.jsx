import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import IntroSection from "../components/intro-section";
import StepSection from "../components/step-section";
import MentalHealthSection from "../components/mental-health-section";
import OnlineTherapyBenefits from "../components/online-therapy-section";


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
      <MentalHealthSection />
      <OnlineTherapyBenefits />
      <StepSection />
      <Footer />
    </GeneralContainer>
  )
}

export default Home;