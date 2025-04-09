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
      "Un nuevo comienzo, pero la misma convicción.",
      "",
      "A decir verdad, nunca me fui, simplemente dejé de hacer ruido por un rato.",
      "",
      "Vale, pues volvemos a las andadas, con la firme intención de continuar brindando servicios clínicos basados en evidencia, con ética, calidad y alto profesionalismo.",
      "",
      "Defendiendo, al más puro estilo de un iconoclasta, que la salud mental no puede abordarse con superficialidad, pseudociencias ni desde modas pasajeras. Contestarario e inconformista, abanderando el pensamiento crítico y con el objetivo claro: que se valore lo clínico como un espacio de transformación que requiere tiempo, disciplina, rigor y un 'extra' de vez en cuando.",
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