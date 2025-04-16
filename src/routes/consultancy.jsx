import styled from 'styled-components';
import Header from '../components/header';
import Terms from '../components/terms';
import corp from '/assets/images/corp-route.png'
import corpOne from '/assets/images/corpOne.png'
import corpTwo from '/assets/images/corpTwo.png'
import corpThree from '/assets/images/corpThree.png'
import { typography, typography2 } from '../styles/typography';
import Footer from '../components/footer';
import { benefitCorpList, conclusionCorpText, corpText, subtitleCorpText } from '../data/definitions';

const GeneralContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 75%;
  align-self: center;
  justify-self: center;

  @media (max-width: 750px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 87%;
  }
`


const TopContainer = styled.div`
  padding: 4.5rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 2.5rem;

  @media (max-width: 750px) {
    width: 90%;
    gap: 2rem;
    padding: 3.5rem 0 2rem 0;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }
`

const Title = styled.h1`
 ${typography.head.xl}
  color: black;
  margin: 0;
  align-self: center;

  @media (max-width: 750px) {
    ${typography.head.lgx}
  }

  @media (max-width: 600px) {
    ${typography.head.lga}
  }

  @media (max-width: 450px) {
    ${typography.head.md}
  }
`;

const CorpText = styled.p`
  ${typography2.text.lg}
  color: black;
  text-align: justify;
  align-self: center;
  line-height: 1.7rem;
  margin: 0 0 2rem 0;

  @media (max-width: 450px) {
    ${typography2.text.md}
  }
`;


const ServicesImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 150px;

  @media (max-width: 600px) {
    max-width: 100px;
  }
  
  @media (max-width: 450px) {
    max-width: 50px;
  }
`

const SubTitle = styled.h2`
  ${typography2.head.xls};
  width: 70%;
  margin: 0;

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    ${typography2.text.lg};
  }
`;


const InfoTitle = styled.h2`
  ${typography2.head.xls};
  color: black;
  text-align: center;
  align-self: center;
  margin: 0;
  padding-bottom: 5rem;

  @media (max-width: 450px) {
    ${typography2.text.lg}
  }
`;

const BenefitsList = styled.ol`
  width: 79%;
  padding-left: 1.5rem;
  margin: 1.5rem 0 0.5rem 0;

  
  @media (max-width: 750px) {
    width: 85%;
  }

  li {
    ${typography2.text.lg};
    color: black;
    margin-bottom: 1rem;
    list-style-type: square;

    @media (max-width: 450px) {
      ${typography2.text.md};
    }
  }
`;

const CorpImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  justify-content: space-around;
`

const CorpImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 220px;
  padding: 2rem 0 3rem;
  border-radius: 50%;

  @media (max-width: 900px) {
    max-width: 180px;
  }
  
  @media (max-width: 750px) {
    max-width: 150px;
  }

  @media (max-width: 600px) {
    max-width: 120px;
  }

  @media (max-width: 500px) {
    max-width: 100px;
  }

  @media (max-width: 400px) {
    max-width: 80px;
  }
`


const ConsultancyServices = () => {

  return (
    <>
      <Header />
      <GeneralContainer>

        <TopContainer>
          <ServicesImg src={corp} />
          <Title>Consultoría</Title>
        </TopContainer>


        <CorpText>{corpText}</CorpText>
        <SubTitle>{subtitleCorpText}</SubTitle>

        <BenefitsList>
          {benefitCorpList.map((benefit, index) => {
            const [title, ...description] = benefit.split(':');
            return (
              <li key={index}>
                <strong>{title}:</strong>{description.join(':')}
              </li>
            );
          })}
        </BenefitsList>

        <CorpImgContainer>
          <CorpImg src={corpOne} />
          <CorpImg src={corpThree} />
          <CorpImg src={corpTwo} />
        </CorpImgContainer>
        <CorpText>{conclusionCorpText}</CorpText>

        <InfoTitle>¡Puedes utilizar los mismos canales de contacto para solicitar información!</InfoTitle>
      </GeneralContainer>
      <Footer />
      <Terms />
    </>
  );
};

export default ConsultancyServices;
