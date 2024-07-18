import styled from "@emotion/styled";
import Header from "../components/header";


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
    </GeneralContainer>
  )
}

export default Home;