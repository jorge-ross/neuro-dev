import styled from "@emotion/styled";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import IntroSection from "../components/intro-section";
import Mision from "../components/mision";
import Terms from "../components/terms";
import ServicesComponent from "../components/services-component";
import TestimonialSection from "../components/testimonial";
import OnlineServices from "../components/online-services";

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

function Home() {
  useEffect(() => {
    if (window.location.hash === "#contacto") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <GeneralContainer>
      <Header />
      <IntroSection />
      <ServicesComponent />
      <Mision />
      <OnlineServices />
      <TestimonialSection />
      <Footer />
      <Terms />
    </GeneralContainer>
  );
}

export default Home;
