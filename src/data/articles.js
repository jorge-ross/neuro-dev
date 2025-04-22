class Article {
  constructor(id, date, title, alt, imageUrl, postUrl, content, route) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.alt = alt;
    this.imageUrl = imageUrl;
    this.postUrl = postUrl;
    this.content = content;
    this.route = route;
  }
}

const articles = [

  new Article(
    1,
    "07/04/2025 por Jorge Rosano",
    "Preludio 2.0",
    "prelude",
    "/assets/article-imgs/img-1.png",
    "/assets/article-imgs/cover-1.png",
    [
      "Un nuevo comienzo, pero la misma convicción.",
      "",
      "A decir verdad, nunca me fui, simplemente dejé de hacer ruido por un rato.",
      "",
      "Vale, pues volvemos a las andadas, con la firme intención de continuar brindando servicios clínicos basados en evidencia, con ética, calidad y alto profesionalismo.",
      "",
      "Defendiendo, al más puro estilo de un iconoclasta, que la salud mental no puede abordarse con superficialidad, pseudociencias ni desde modas pasajeras. Contestatario e inconformista, abanderando el pensamiento crítico y con el objetivo claro: que se valore lo clínico como un espacio de transformación que requiere tiempo, disciplina, rigor y un 'extra' de vez en cuando.",
      "",
      "Y ya que andamos tirando 'factos', que también se entienda, que detrás de cada técnica, de cada intervención, hay años de investigación, formación y experiencia.",
      "",
      "Ahora es claro ¿no? Resulta más complejo que un 'es que a mi tía si le funcionó'… un clásico.",
      "",
      "En fin, bienvenidos al blog de Neuro-dev",
      "<strong>¡Nos vemos en consulta!</strong>",
    ].join('\n'),
    "/blog/preludio-2-0"
  ),

  new Article(
    2,
    "11/04/2025 por Jorge Rosano",
    "¿Vale la pena pensar?",
    "mentalhealth",
    "/assets/article-imgs/img-2.png",
    "/assets/article-imgs/cover-2.png",
    [
      "<em>En la era de la des-información, o como la inmensa mayoría prefiere decirle 'información'…</em>",
      "",
      "Vivimos rodeados de datos, de voces, de estímulos que reclaman nuestra atención cada segundo. Noticias que se contradicen, titulares diseñados para impactar más que informar, ideas empaquetadas en frases de 280 caracteres (o no sé cuántos sean), <strong>¡y agréguenle lo de la inteligencia artificial!</strong> En medio de todo eso, una pregunta resuena, tal vez con un eco cada vez más tenue: ¿Vale la pena pensar?",
      "",
      "Paradoja inquietante: tenemos acceso a más conocimiento que nunca antes en la historia, pero cada vez reflexionamos y sabemos menos. <strong>Consumimos contenidos al ritmo que las plataformas dictan, y no al ritmo que nuestra mente necesita para comprenderlos</strong> (inserte aquí todo el drama de la dopamina). La inmediatez nos seduce, pero el pensamiento profundo requiere tiempo, pausa, incluso incomodidad.",
      "",
      "Ya no pensamos por necesidad, sino por excepción. Las ideas críticas son incómodas, y lo incómodo rara vez se viraliza. Se prefiere el consenso automático, la opinión repetida, el meme que alivia. El pensamiento ha sido reemplazado por la reacción. Y en ese intercambio, perdemos algo valioso: la posibilidad de cuestionar, de interpretar, de entender realmente lo que ocurre.",
      "",
      "<strong>- Inteligencia artificial, ignorancia natural -</strong>",
      "",
      "No se trata de romantizar el pasado ni de rechazar la tecnología. Pero sí de reconocer que la libertad de pensar (si es que existe tal cosa; la cosa es que se me ha hecho poético escribirlo) no solo se defiende con discursos o podcasts 'profundos' sino con práctica diaria. <strong>Pensar se ha vuelto un acto de resistencia; el nuevo punk; la verdadera rebeldía</strong>. Un ejercicio impopular hoy en día, sí, pero que sigue representando la naturaleza profundamente humana.",
      "",
      "Hoy, más que nunca, necesitamos pensamiento crítico para distinguir entre lo útil y lo inútil, entre lo que nutre y lo que no, entre lo inmarcesible y lo efímero, incluso, entre lo que denominamos artificial y real. Hasta para saber cuándo una idea es nuestra, y cuándo es simplemente heredada.",
      "",
      "Sin embargo, la pregunta persiste, o ¿ya no?… ¿Qué pasaría si dejamos de pensar?",
    ].join('\n'),
    "/blog/salud-mental"
  ),
];

export { articles };