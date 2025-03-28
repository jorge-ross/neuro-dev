class PsychService {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

export const psychServices = [
  new PsychService(
    1,
    "Individual",
  ),
  new PsychService(
    2,
    "De pareja",
  ),
  new PsychService(
    3,
    "Manejo del estrés",
  ),
  new PsychService(
    4,
    "Problemas de conducta",
  ),
  new PsychService(
    5,
    "Adquisición de hábitos y rutinas",
  ),
  new PsychService(
    6,
    "Técnicas de estudio",
  ),
  new PsychService(
    7,
    "Habilidades Sociales",
  ),
  new PsychService(
    8,
    "Orientación Psicológica",
  ),
  new PsychService(
    9,
    "Corporativo",
  ),
];

class NeuroPsychServices {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

export const neuroServices = [
  new NeuroPsychServices(
    1,
    "Trastornos del aprendizaje",
  ),
  new NeuroPsychServices(
    2,
    "Funcionamiento Intelectual Límite",
  ),
  new NeuroPsychServices(
    3,
    "Deterioro cognitivo",
  ),
  new NeuroPsychServices(
    4,
    "Accidentes cerebrovasculares",
  ),
  new NeuroPsychServices(
    5,
    "Traumatismos Craneoencefálicos",
  ),
  new NeuroPsychServices(
    6,
    "Trastorno del espectro del autismo",
  ),
  new NeuroPsychServices(
    7,
    "Trastornos Neurocognitivos",
  ),
  new NeuroPsychServices(
    8,
    "Altas capacidades intelectuales",
  ),
  new NeuroPsychServices(
    9,
    "Discapacidad Intelectual",
  ),
  new NeuroPsychServices(
    10,
    "Trastorno por Déficit de Atención con Hiperactividad (TDAH)",
  ),
  new NeuroPsychServices(
    11,
    "Demencias",
  ),
  new NeuroPsychServices(
    12,
    "Rehabilitación cognitiva",
  ),
];
