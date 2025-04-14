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

  @media (max-width: 600px) {
    width: 92%;
  }
`;

const Title = styled.h1`
  ${typography.head.xl}
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 800px) {
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
  align-self: start;
  border-bottom: 1px solid black;
  padding-bottom: 0.25rem;
  display: inline-block; 
  margin-bottom: 0;
  
  @media (max-width: 800px) {
    ${typography.head.xss};
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
  }
`;

const ArticleDate = styled.h1`
  ${typography.text.md};
  align-self: start;
  font-weight: 400;
  margin-top: 0.5rem;

  @media (max-width: 800px) {
    ${typography.text.sm};
    margin-top: 0;
  }
`;

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 0.5rem;

   @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
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
  width: 270px;
  height: 350px;

  &:hover {
    background-color:rgb(241, 241, 241);
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    width: 88%;
    border: none;
    justify-content: start;
    height: auto;
  }

  @media (max-width: 500px) {
    width: 95%;
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
              <ArticleDate>{article.date}</ArticleDate>
            </ArticleLink>
          ))}
        </ArticleList>
      </BlogContainer >
      <Footer />
    </>
  );
};

export default Blog;