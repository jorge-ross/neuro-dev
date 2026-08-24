import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const faqItems = [
  {
    question: "¿Mis datos y lo que hablemos en sesión son confidenciales?",
    answer:
      "Sí. Todo lo que compartas, antes y durante tus sesiones, se maneja bajo estricta confidencialidad profesional.",
  },
  {
    question: "¿Puedo cancelar o cambiar mi horario?",
    answer:
      "Sí. Puedes reagendar o cancelar tu cita hasta 24 horas antes, sin costo, para que otra persona pueda aprovechar ese espacio.",
  },
  {
    question: "¿Necesito un diagnóstico o referencia previa?",
    answer:
      "No. Puedes agendar tu primera sesión aunque no sepas exactamente qué te pasa; para eso estamos.",
  },
  {
    question: "¿Las sesiones son en línea o presenciales?",
    answer:
      "En ambas modalidades, según se prefiera. Eso sí, con previo acuerdo.",
  },
];

export default function FaqSection() {
  const layoutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section>
      <Wrap>
        <SectionHead>
          <Eyebrow>Antes de agendar</Eyebrow>
          <h2>Preguntas frecuentes</h2>
        </SectionHead>

        <FaqLayout ref={layoutRef} $visible={visible}>
          <FaqList>
            {faqItems.map((item) => (
              <FaqItem key={item.question}>
                <summary>
                  <FaqIcon aria-hidden="true">+</FaqIcon>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </FaqItem>
            ))}
          </FaqList>
        </FaqLayout>
      </Wrap>
    </Section>
  );
}

const Section = styled.section`
  padding: 70px 0;
`;

const Wrap = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;

  @media (max-width: 560px) {
    padding: 0 20px;
  }
`;

const SectionHead = styled.div`
${typography.head.xss};
  max-width: 620px;
  margin-bottom: 42px;

  h2 {
    font-size: clamp(1.7rem, 2.8vw, 2.3rem);
    margin: 10px 0 0;
    color: ${colors.blue[900]};
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.blue[700]};
  font-weight: 600;

  &::before {
    content: "";
    width: 16px;
    height: 1.5px;
    background: ${colors.blue[900]};
    display: inline-block;
  }
`;

const FaqLayout = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "none" : "translateY(18px)")};
  transition: opacity 0.6s ease, transform 0.6s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
`;

const FaqItem = styled.details`
  border-bottom: 1px solid ${colors.grey[200]};
  padding: 18px 0;

  summary {
    ${typography.text.sm};
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    font-weight: 600;
    color: ${colors.blue[900]};
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  p {
    ${typography.text.sm};
    margin: 12px 0 0;
    color: ${colors.grey[600]};
  }
`;

const FaqIcon = styled.span`
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid ${colors.blue[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue[900]};
  font-size: 0.9rem;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;

  details[open] & {
    background: ${colors.blue[900]};
    color: white;
    transform: rotate(45deg);
  }
`;
