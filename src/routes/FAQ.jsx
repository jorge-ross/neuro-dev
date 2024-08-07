import styled from 'styled-components';
import { useState } from 'react';
import Header from '../components/header';

const FAQContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQTitle = styled.h1`
  font-size: 2.5rem;
  color: #0d47a1;
  text-align: center;
  margin-bottom: 2rem;
`;

const Question = styled.div`
  margin-bottom: 2rem;
`;

const QuestionTitle = styled.h2`
  font-size: 1.5rem;
  color: #1565c0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 0.5rem;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const FreqQuestions = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué servicios de salud mental ofreces?",
      answer: "Ofrecemos una amplia gama de servicios que incluyen terapia individual, terapia de pareja, evaluación neuropsicológica, y más."
    },
    {
      question: "¿Qué es una evaluación neuropsicológica?",
      answer: "Es un proceso de evaluación exhaustiva que mide las funciones cognitivas y emocionales para entender mejor el funcionamiento del cerebro."
    },
    {
      question: "¿Cómo puedo saber si necesito terapia?",
      answer: "Si estás enfrentando dificultades emocionales, estrés, ansiedad, o cualquier otro problema mental que afecte tu bienestar, podría ser útil hablar con un profesional."
    },
    {
      question: "¿La terapia en línea es efectiva?",
      answer: "Sí, la terapia en línea es tan efectiva como la terapia presencial para la mayoría de los problemas de salud mental."
    },
    {
      question: "¿Cómo agendo una cita?",
      answer: "Puedes agendar una cita contactándonos por WhatsApp o a través de nuestro formulario de contacto en la página web."
    },
    {
      question: "¿Cuánto tiempo dura una sesión de terapia?",
      answer: "Cada sesión de terapia dura aproximadamente 50 minutos, aunque la duración puede variar según las necesidades del paciente."
    },
    {
      question: "¿Qué debo esperar en mi primera sesión?",
      answer: "En tu primera sesión, el terapeuta te hará preguntas sobre tu historia personal y tus preocupaciones actuales para entender mejor cómo ayudarte."
    },
    {
      question: "¿Aceptan seguros médicos?",
      answer: "Actualmente no aceptamos seguros médicos, pero podemos proporcionar recibos para que los presentes a tu aseguradora."
    },
    {
      question: "¿Qué tipos de trastornos tratan?",
      answer: "Tratamos una variedad de trastornos, incluyendo ansiedad, depresión, TDAH, trastornos del estado de ánimo, y más."
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer: "Si necesitas cancelar o reprogramar una cita, te pedimos que nos avises con al menos 24 horas de anticipación."
    }
  ];

  return (
    <>
    <Header />  
      <FAQContainer>
        <FAQTitle>Preguntas Frecuentes</FAQTitle>
        {faqs.map((faq, index) => (
          <Question key={index}>
            <QuestionTitle onClick={() => toggleAnswer(index)}>
              {faq.question}
            </QuestionTitle>
            <Answer $isOpen={openQuestionIndex === index}>
              {faq.answer}
            </Answer>
          </Question>
        ))}
      </FAQContainer>
    </>
  );
};

export default FreqQuestions;
