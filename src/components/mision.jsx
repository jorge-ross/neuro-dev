import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 2rem;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #adb5bd;
`;

const Mision = () => {
  return (
    <Container>
      <Title>Acerca de Neurodev</Title>
      <Description>
        At MindWell Consultancy, we're dedicated to providing compassionate, evidence-based mental health support. 
        Our team of experienced professionals is committed to helping you achieve mental wellness and lead a fulfilling life.
      </Description>
      <ImagePlaceholder>
        <span>Image Placeholder</span>
      </ImagePlaceholder>
    </Container>
  );
};

export default Mision;
