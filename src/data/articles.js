class Article {
  constructor(id, title, alt, imageUrl, postUrl, content, route) {
    this.id = id;
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
    "Preludio 2.0",
    "prelude",
    "/assets/article-imgs/img-1.png",
    "/assets/article-imgs/cover-1.png",
    [
      "La salud mental es un aspecto fundamental del bienestar general de las personas. No solo afecta cómo pensamos, sentimos y actuamos en nuestra vida diaria, sino que también influye en cómo manejamos el estrés, nos relacionamos con los demás y tomamos decisiones.",
      "",
      "Cuidar de nuestra salud mental es tan importante como cuidar de nuestra salud física. Practicar hábitos saludables como el ejercicio regular, una dieta equilibrada y el descanso adecuado puede marcar una gran diferencia. Además, buscar apoyo profesional cuando sea necesario es clave para enfrentar desafíos emocionales o psicológicos.",
      "",
      "En Neuro-dev, creemos en la importancia de promover la salud mental y brindar herramientas para que las personas puedan alcanzar su máximo potencial. Recuerda: cuidar de tu mente es cuidar de ti mismo.",
    ].join('\n'),
    "/blog/preludio-2-0"
  ),

  new Article(
    2,
    "¿Vale la pena pensar?",
    "mentalhealth",
    "/assets/article-imgs/img-2.png",
    "/assets/article-imgs/cover-2.png",
    [
      "La salud mental es un aspecto fundamental del bienestar general de las personas. No solo afecta cómo pensamos, sentimos y actuamos en nuestra vida diaria, sino que también influye en cómo manejamos el estrés, nos relacionamos con los demás y tomamos decisiones.",
      "",
      "Cuidar de nuestra salud mental es tan importante como cuidar de nuestra salud física. Practicar hábitos saludables como el ejercicio regular, una dieta equilibrada y el descanso adecuado puede marcar una gran diferencia. Además, buscar apoyo profesional cuando sea necesario es clave para enfrentar desafíos emocionales o psicológicos.",
      "",
      "En Neuro-dev, creemos en la importancia de promover la salud mental y brindar herramientas para que las personas puedan alcanzar su máximo potencial. Recuerda: cuidar de tu mente es cuidar de ti mismo.",
    ].join('\n'),
    "/blog/salud-mental"
  ),
];

export { articles };