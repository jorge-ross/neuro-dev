class PsychService {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export const psychServices = [
  new PsychService(
    1,
    "Individual",
    "Espacio de acompañamiento personalizado para explorar y trabajar situaciones emocionales, personales o conductuales que afectan tu bienestar. Se adapta a las necesidades específicas de cada paciente, sin importar la edad o el motivo de consulta."
  ),
  new PsychService(
    2,
    "De pareja",
    "Terapia enfocada en mejorar la comunicación, resolver conflictos y fortalecer el vínculo entre ambos miembros de la pareja. Se abordan temas como confianza, intimidad, toma de decisiones conjuntas y manejo de crisis."
  ),
  new PsychService(
    3,
    "Manejo del estrés",
    "Estrategias y herramientas prácticas para identificar las fuentes de estrés, reducir su impacto en la vida diaria y desarrollar hábitos de afrontamiento más saludables tanto en el ámbito personal como laboral."
  ),
  new PsychService(
    4,
    "Problemas de conducta",
    "Intervención dirigida a identificar y modificar patrones de comportamiento que generan dificultades en el entorno familiar, escolar o social, promoviendo estrategias de manejo adecuadas a cada caso."
  ),
  new PsychService(
    5,
    "Adquisición de hábitos y rutinas",
    "Acompañamiento para establecer rutinas y hábitos saludables y sostenibles en el tiempo, útil tanto para niños en proceso de desarrollo como para adultos que buscan reorganizar su día a día."
  ),
  new PsychService(
    6,
    "Técnicas de estudio",
    "Enseñanza de métodos y estrategias de organización, concentración y memorización que facilitan el aprendizaje y mejoran el rendimiento académico, adaptadas al estilo de cada estudiante."
  ),
  new PsychService(
    7,
    "Habilidades Sociales",
    "Entrenamiento orientado a fortalecer la comunicación, la asertividad y la interacción con otros, favoreciendo relaciones interpersonales más saludables en distintos contextos de vida."
  ),
  new PsychService(
    8,
    "Orientación Psicológica",
    "Sesiones breves de orientación para ayudar a esclarecer una situación particular, tomar decisiones o identificar el tipo de apoyo profesional más adecuado según las necesidades del paciente."
  ),
  new PsychService(
    9,
    "Corporativo",
    "Servicios dirigidos a empresas para promover el bienestar emocional de los colaboradores, prevenir el desgaste laboral y fortalecer el clima organizacional mediante talleres, capacitaciones y asesoría psicológica."
  ),
];

class NeuroPsychServices {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export const neuroServices = [
  new NeuroPsychServices(
    1,
    "Trastornos del aprendizaje",
    "Evaluación y diagnóstico de dificultades específicas en la lectura, escritura o cálculo, con el fin de diseñar estrategias de intervención que apoyen el desempeño académico del paciente."
  ),
  new NeuroPsychServices(
    2,
    "Funcionamiento Intelectual Límite",
    "Valoración neuropsicológica orientada a identificar un desempeño cognitivo por debajo del promedio, pero sin llegar al rango de discapacidad intelectual, para brindar apoyo educativo y personal adecuado."
  ),
  new NeuroPsychServices(
    3,
    "Deterioro cognitivo",
    "Evaluación de cambios en la memoria, atención y otras funciones cognitivas, útil para detectar de forma temprana alteraciones que pueden afectar la vida diaria y dar seguimiento a su evolución."
  ),
  new NeuroPsychServices(
    4,
    "Accidentes cerebrovasculares",
    "Valoración y rehabilitación neuropsicológica de las secuelas cognitivas, emocionales y conductuales derivadas de un evento cerebrovascular, con el objetivo de favorecer la recuperación funcional."
  ),
  new NeuroPsychServices(
    5,
    "Traumatismos Craneoencefálicos",
    "Evaluación de las consecuencias cognitivas y emocionales tras un traumatismo craneoencefálico, diseñando un plan de rehabilitación acorde a la severidad y necesidades particulares del paciente."
  ),
  new NeuroPsychServices(
    6,
    "Trastorno del espectro del autismo",
    "Evaluación diagnóstica y seguimiento de personas dentro del espectro autista, considerando su perfil cognitivo, social y conductual para orientar el tipo de apoyo e intervención más pertinente."
  ),
  new NeuroPsychServices(
    7,
    "Trastornos Neurocognitivos",
    "Identificación y caracterización de alteraciones en funciones cognitivas como memoria, lenguaje o funciones ejecutivas, asociadas a distintas condiciones médicas o neurológicas."
  ),
  new NeuroPsychServices(
    8,
    "Altas capacidades intelectuales",
    "Evaluación del perfil cognitivo en personas con un desempeño intelectual superior al promedio, con el fin de orientar estrategias educativas y de desarrollo personal acordes a su potencial."
  ),
  new NeuroPsychServices(
    9,
    "Discapacidad Intelectual",
    "Evaluación neuropsicológica del funcionamiento intelectual y adaptativo para determinar el nivel de apoyo requerido y favorecer la inclusión educativa, social y familiar del paciente."
  ),
  new NeuroPsychServices(
    10,
    "Trastorno por Déficit de Atención con Hiperactividad (TDAH)",
    "Evaluación diagnóstica de las dificultades de atención, impulsividad e hiperactividad, así como diseño de estrategias de manejo en el ámbito escolar, laboral y familiar."
  ),
  new NeuroPsychServices(
    11,
    "Demencias",
    "Evaluación neuropsicológica orientada a la detección y seguimiento de procesos demenciales, aportando información clave para el diagnóstico diferencial y la planeación del tratamiento."
  ),
  new NeuroPsychServices(
    12,
    "Rehabilitación cognitiva",
    "Programa de intervención dirigido a estimular y fortalecer funciones cognitivas como memoria, atención y funciones ejecutivas, favoreciendo la autonomía y calidad de vida del paciente."
  ),
];