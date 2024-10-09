import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import IntroSection from "../components/intro-section";
import Mision from "../components/mision";
import OnlineTherapyBenefits from "../components/online-therapy-section";
import TestimonialSection from "../components/testimonial";
import Terms from "../components/terms";
import Services from "../components/services";


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
      <Services />
      <Mision />
      <OnlineTherapyBenefits />
      <TestimonialSection />
      <Footer />
      <Terms />
    </GeneralContainer>
  )
}

export default Home;