import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 75%;
  align-self: center;
  justify-self: center;
  padding: 1.5rem 0 4rem;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  ${typography.head.xl}
  text-align: center;
  margin: 2.5rem 0;

  @media (max-width: 750px) {
    ${typography.head.lgx}
  }

  @media (max-width: 500px) {
    ${typography.head.lga}
  }

  @media (max-width: 400px) {
    ${typography.head.md}
  }
`;

const ArticleTitle = styled.h1`
  ${typography.head.xs};
  text-align: center;

  @media (max-width: 750px) {
    ${typography.head.xss};
  }
`;

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 0.5rem;

   @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
  padding: 1rem;
  border-radius: 0.75rem;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-self: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  width: 250px;
  height: 310px;

  &:hover {
    background-color:rgb(241, 241, 241);
    transform: scale(1.05);
  }

  @media (max-width: 750px) {
    width: 90%;
    height: 310px;
    justify-content: start;
  }

  @media (max-width: 650px) {
    height: 280px;
  }

  @media (max-width: 580px) {
    height: 250px;
  }

   @media (max-width: 500px) {
    height: 220px;
  }

  @media (max-width: 400px) {
    height: 200px;
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
          {articles.map((article) => (
            <ArticleLink
              to={article.route ? article.route.replace("/blog/", "") : "/"}
              key={article.id}
            >
              <ArticleImage src={article.postUrl} alt={article.alt} />
              <ArticleTitle>{article.title}</ArticleTitle>
            </ArticleLink>
          ))}
        </ArticleList>
      </BlogContainer >
      <Footer />
    </>
  );
};

export default Blog;