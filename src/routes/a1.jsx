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
  width: 60%;
  align-self: center;
  justify-self: center;
  padding: 2rem 0 5rem;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const Title = styled.h1`
  ${typography.head.md};
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const ContentContainer = styled.div`
  display: flex;
  border-right: 2px solid #000;
  padding-top: 0.75rem;
`;

const Content = styled.p`
  ${typography.text.md};
  margin: 0;
  line-height: 1.5;
  text-align: justify;
  width: 95%;
  white-space: pre-line;
`;

const ImageContainer = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 1.5rem 0;
`

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
        <ContentContainer>
          <Content>
            {article.content}
          </Content>
        </ContentContainer>
      </ArticleContainer>
      <Footer />
    </>
  );
};

export default ArticleDetail;