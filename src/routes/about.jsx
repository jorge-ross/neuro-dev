import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Header from "../components/header";


const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

function About() {
  return (
    <GeneralContainer>
      <Header />
      Hola Mundo
    </GeneralContainer>
  )
}

export default About;