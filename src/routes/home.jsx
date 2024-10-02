import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import IntroSection from "../components/intro-section";
import StepSection from "../components/step-section";
import MentalHealthSection from "../components/mental-health-section";
import OnlineTherapyBenefits from "../components/online-therapy-section";
import TestimonialSection from "../components/testimonial";
import Terms from "../components/terms";


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
      <TestimonialSection />
      <Footer />
      <Terms />
    </GeneralContainer>
  )
}

export default Home;