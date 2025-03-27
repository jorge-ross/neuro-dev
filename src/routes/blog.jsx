import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";
import logotest from "../assets/images/logond.png";


const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 75%;
  align-self: center;
  justify-self: center;
  padding: 2rem 0 4rem;

  @media (max-width: 750px) {
    
  }
`;

const Title = styled.h1`
  ${typography.head.xl}
  text-align: center;

  @media (max-width: 750px) {
    ${typography.head.lgx}
  }
`;

const ArticleTitle = styled.h1`
  ${typography.head.xs};
  text-align: center;

  @media (max-width: 750px) {
    // ${typography.head.lgx}
  }
`;

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 1rem;
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.75rem;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-self: center;
  gap: 0.5rem;
  width: 250px;
  height: 310px;

  &:hover {
    background-color:rgb(241, 241, 241);
    transform: scale(1.05);
  }
`;

const ArticleImage = styled.img`
  width: 90%;
  border-radius: 0.75rem;
  object-fit: cover;
`;

const Blog = () => {
  return (
    <>
      <Header />
      <BlogContainer>
        <Title>Entradas recientes</Title>
        <ArticleList>
          <ArticleLink to="/blog/salud-mental">
            <ArticleImage src={logotest} />
            <ArticleTitle>
              Preludio 2.0
            </ArticleTitle>
          </ArticleLink>
        </ArticleList>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default Blog;