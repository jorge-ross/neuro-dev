import styled from "@emotion/styled";
import Header from "../components/header";
import Footer from "../components/footer";
import { typography } from "../styles/typography";
import { articles } from "../data/articles";
import { useParams } from "react-router-dom";

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 57%;
  align-self: center;
  justify-self: center;
  padding: 2rem 0 5rem;

  @media (max-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    width: 85%;
    padding: 1.2rem 0 3rem;
  }
`;

const Title = styled.h1`
  ${typography.head.lg};
  font-weight: bold;
  margin: 1rem 0 0.25rem 0;

  @media (max-width: 600px) {
    ${typography.head.md};
    margin: 0.5rem 0;
  }

  @media (max-width: 400px) {
    ${typography.head.smx};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  border-right: 2px solid #000;
  padding-top: 0.75rem;

  @media (max-width: 600px) {
    border-right: none;
    justify-content: center;
  }
`;

const Content = styled.p`
  ${typography.text.md};
  margin: 0;
  line-height: 1.5rem;
  width: 90%;
  white-space: pre-line;

  @media (max-width: 600px) {
    width: 98%;
  }
`;

const ImageContainer = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 1rem 0;
`

const ArticleDate = styled.h1`
  ${typography.text.md};
  align-self: start;
  font-weight: 400;
  margin-top: 0;

  @media (max-width: 800px) {
    ${typography.text.sm};
  }
`;

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.route === `/blog/${slug}`);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <>
      <Header />
      <ArticleContainer>
        <ImageContainer src={article.imageUrl} alt={article.alt} />
        <Title>{article.title}</Title>
        <ArticleDate>{article.date}</ArticleDate>
        <ContentContainer>
          <Content
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </ContentContainer>
      </ArticleContainer>
      <Footer />
    </>
  );
};

export default ArticleDetail;