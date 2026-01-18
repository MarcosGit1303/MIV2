/* ///////////////////////////////////////////////////////// */
/* =========================CONTENIDO PARRAFOS========================= */
/* ///////////////////////////////////////////////////////// */
const textosReinos = {
  ortte: [
    { tipo: "h1", texto: "Historia Ortte" },
    { tipo: "h2", texto: "Era Seilar" },
    { tipo: "p", texto: "Toda la historia conocida comienza con el nacimiento de los Seilar. Se dividían por familias dependiendo del lugar en el que nacieron y de los poderes que tuvieran. Tras su aparición, según los registros, es donde los mortales comenzaron a contar los años, puesto que fueron los propios Seilar los que les enseñaron la mayoría de las cosas." },
    { tipo: "p", texto: "Ellos son la raza superior que gobernó durante mucho tiempo los distintos reinos además de protegerlos de distintas amenazas como Rol, un Seilar cuyas ambiciones fueron desechar a todos los mortales que no quisieran someterse a su mandato." },
    { tipo: "p", texto: "La familia Muan, defendió a los reinos humanos y les ayudó a prosperar de la manera correcta, les enseño las principales artes de la magia, artesanía, recolección, escritura, gobierno, etc.." },
    { tipo: "p", texto: "Después de ellos apareció la familia Elten cuyos miembros ayudaron de igual forma a los elfos a desarrollarse." },
    { tipo: "p", texto: "Durante varios siglos la paz perduró, los Seilars ayudaban a los mortales a construir grandes lugares como el puerto de Henred o Puerto Plateado uno de los mayores lugares creados por los seilars." },
    { tipo: "h2", texto: "Era del humano" },
    { tipo: "p", texto: "Llegado el momento, el resto de razas se rebelaron contra los Seilars y echaron a la familia Muan, ya que Rol fue plantando a lo largo del tiempo semillas de rencor por todos los reinos a los que ayudaron los Muan, así cuando al final se revelaron las razas, los Seilars no plantaron resistencia alguna, y con la ayuda de la familia Elten y los pocos vasallos que les apoyaban, se echaron a la mar para crear sus propias tierras a las que gobernar, después de eso, los distintos reinos del continente gozaron una gran paz durante varias décadas. Los humanos fueron la raza que más se extendió por el continente ya que los primeros Seilars nacieron allí, seguida de los elfos que ocuparon la mayor parte de los grandes bosques, los enanos se agruparon en una sola montaña, y se esparcieron por el resto de los reinos como grandes artesanos, el resto de razas como gnomos y medianos, se unieron principalmente a los reinos humanos como comerciantes nómadas o altos cargos en las cortes como consejeros, además de formar sus propias sociedades de nobles." },
    { tipo: "p", texto: "Pero la paz no duraría para siempre ya que Rol se infiltró en los diferentes países con la ayuda de sus aliados, fomentando el malestar en las ciudades y generando revueltas a lo largo del imperio humano, lo que llevó a los gobernantes a pedir ayuda a los antiguos Seilars, los cuales después de crear la isla de Lumina regresaron con grandes ejércitos y criaturas sobrenaturales, impidiendo así la invasión de Rol al imperio, durante varios años los ejércitos de Zal y Rol lucharon a lo largo del imperio provocando grandes daños y muertes, hasta que el ancho de cada ejército se enfrentó en una sola batalla en el campo de Paldnor, fue la batalla decisiva que puso fin a una larga guerra, Rol fue derrotado y encerrado, en el bando de Zal murieron varios Seilar y criaturas importantes." },
    { tipo: "p", texto: "Pero este no fue el fin, algunos de los secuaces de Rol huyeron, lo que hizo que Zal se volviera loco y les persiguiera, separó su fortaleza del plano material creando un plano propio, y los Seilars se fueron separando y desperdigados por todo el continente de Ortte. Después de esto las apariciones de los Seilars menguaron con el tiempo, algunos de ellos no se volvieron a ver y otros se camuflaban entre las sociedades, las personas desarrollaron cultos para pedir que volvieran los Seilars, pero sin resultado alguno." },
    { tipo: "h2", texto: "Era Del Fuego Y Los Héroes" },
    { tipo: "p", texto: "Los años fueron pasando y el mundo olvidó a los Seilars, de ellos solo quedaron las grandes construcciones, y los diferentes cultos que se crearon. Los reinos humanos se sumieron en guerras civiles constantes, los enanos se separaron aún más de todos los demás reinos, y los elfos desarrollaron su cultura hasta los mismos niveles que los humanos, pero entorno a 1000 años después de la desaparición de los Seilars, en Centron, comenzaron a fluctuar varias ramificaciones de magia, y se crearon distintos portales hacia una nueva dimensión, de la cual, vinieron grandes demonios y seres paranormales y conquistaron la tierra de Centron, devastando las ciudades y prados, terraformando lo que alguna vez fueron grandes campos de cultivos, y llanuras rocosas, y grandes acantilados, en apenas un par de meses se creó lo que se llama el valle del Contre el lugar más desolado del continente Ortte. En su contraparte, los reinos humanos tuvieron noticia de esta invasión, por lo que se prepararon para la inminente guerra. Una vez más las distintas razas mortales se volvieron a unir para repeler al nuevo invasor de otro plano, durante casi 100 años hubo una guerra entre los demonios y los mortales, en la cual los “héroes” toman mucho protagonismo, personas que dedicaron su vida entera a luchar de diferentes formas y con poderes sobrenaturales contra los demonios, algunas personas dicen que eran elegidos de los antiguos Seilars que les prestaron sus poderes para poder enfrentar a los demonios que asolaban las tierras, otras personas creen que vinieron de otros planos de la existencia desconocidos y que ayudaron a los mortales por alguna razón, sea como fuese, los héroes jugaron un gran papel en esta guerra y con su ayuda se consiguió repeler y encerrar a varios de los demonios mas poderosos, calmando la situación en los reinos mortales y transformando a Centron, por Concrok ya que después de la guerra solo quedo un valle de acantilados desiertos y muerte por todo el territorio." },
    { tipo: "h2", texto: "Era de los Gregon" },
    { tipo: "p", texto: "Después de varios siglos de guerra la situación se estabilizó con los demonios, los tieflings y otras razas demoníacas comenzaron a mezclarse con la población de los distintos reinos." },
    { tipo: "p", texto: "A la par de eso, los antiguos “héroes” se alzaron con el poder después de la guerra y la muerte de algunos de los principales reyes, unificando a la mayoría de los reinos humanos y algún reino élfico, naciendo así el imperio Gregon. En este nuevo imperio los reyes no existían y gobernaban un grupo de sabios descendientes de los héroes que mejoraron la situación general del imperio, ampliando las rutas de comercio, mejoraron las infraestructuras y gobernaron sabiamente, copiando de alguna manera la antigua civilización del imperio de lumina, pero la calma no duró mucho, ya que después de un par de siglos el consejo de sabios comenzó a corromperse y crear malestar entre la población de los distintos reinos, haciendo así que naciera una revolución, la cual acabaría con el reinado de los Gregon, y con el alzamiento de una nueva línea de gobernantes." },
    { tipo: "h2", texto: "Segunda era de los humanos" },
    { tipo: "p", texto: "Gobiernan los distintos reinos de forma pacífica los principales señores de los mismo" },

  ],
  religion: [
    { tipo: "h1", texto: "Religion" },
    { tipo: "p", texto: "En el continente Ortte sólo está extendida una “Religión” representada por los Seilars, cada uno de ellos tiene un aspecto diferentes así como conexiones con distintas fuerza primordiales, pero no son más que otra raza con capacidades extraordinarias y muy poderosas, con un entendimiento mayor de la realidad y un dominio de la magia que supera a la de los mortales. " },
    { tipo: "p", texto: "Entre sus capacidades se encuentran su uso ilimitado de la magia y de las escuelas de poder, no necesitan comer, beber, dormir ni descansar, no son inmortales pero nunca envejecen, hay maneras de matarlos pero es casi imposible para un mortal, son “hermafroditas” tiene una forma masculina y otra femenina, que pueden cambiar a placer además de poder hacer copias de sí mismos." },
    { tipo: "p", texto: "La gente les reza para obtener su favor y comunicarse con ellos, pedir ayuda en alguna situación. Existen tradiciones que ellos mismos iniciaron, fiestas de algún tipo o ritos funerarios para cada uno de ellos. No se les ve como dioses, ya que no es la misma percepción de fe que tenemos en la tierra, en Ortte estos seilars existieron de verdad y caminaron con los seres vivos una vez, por lo que el rezo y la fe es más bien una forma de conseguir poder o conocimiento, o una manera de regir las leyes o la ética de cada persona." },
    { tipo: "p", texto: "Los más famosos son:" },
    { tipo: "p", texto: "Zal - Cabellos largos dorados, compostura ágil y resbaladiza, se representa con una espada y cetro dorados, además de túnicas blancas, representa el sol, la luz y la justicia." },
    { tipo: "p", texto: "Nur - Cabellos semi largos por debajo de las orejas negros, con orejas un poco alargadas, un cuerpo esbelto y alargado, elegante, con vestimentas verdes y marrones, se muestra con un arco y un lobo gris gigante, representa la naturaleza, bosques, animales." },
    { tipo: "p", texto: "Jun - Un cuerpo grisáceo, muy musculado sin pelo, sustituido por una piel rocosa en algunas partes de su cuerpo, se le representa con solo unos pantalones y largos y un gran cinturón, su arma es un gran martillo con un mango excesivamente largo, representa las montañas y tierra." },
    { tipo: "p", texto: "Ces - Un cuerpo esbeltico, pelos de fuego que ascienden unos 30 centímetros hacia arriba, sus brazos acaban en colores rojos y lleva finas túnicas, se representa con dos espadas gemelas y llamas en las manos y cabeza, representa el fuego y los volcanes." },
    { tipo: "p", texto: "Jor - Largos cabellos de color negro, trenzados en su mayoria, vestido con pequeñas placas de cuero y una semiarmadura con algunos atavios marineros con cuerdas o redes, porta una lanza plateada y representa a los oceanos y el agua." }
  ],
  ciencia: [
    { tipo: "h1", texto: "Ciencia" },
    { tipo: "h2", texto: "Astrología (Eruditos o estudiantes principiantes)" },
    { tipo: "p", texto: "Existe un solo sol igual que en la tierra, hay 6 planetas más que se conozcan (Uetune, Onus, Angiea, Itheshan, Bocury, Nopra) todos en orden y el nuestro Seilyn en 4 posición, también tiene un asteroide llamado Louksna, además de un cinturón de asteroides. Hay un total de 8 constelaciones reconocibles y popularizadas que representan las 8 escuelas de la magia, y se creen que son la puerta a diferentes planos de las tormentas. Constelación de Astralium (Escuela de Abjuration)" },
    { tipo: "p", texto: "Constelación de Pyroventus (Escuela de Evocation)" },
    { tipo: "p", texto: "Constelación de Illusoria (Escuela de Illusion)" },
    { tipo: "p", texto: "Constelación de Divinora (Escuela de Divination)" },
    { tipo: "p", texto: "Constelación de Necrosombra (Escuela de Necromancy)" },
    { tipo: "p", texto: "Constelación de Elementalys (Escuela de Elemental)" },
    { tipo: "p", texto: "Constelación de Enchantaris (Escuela de Enchantment)" },
    { tipo: "p", texto: "Constelación de Transmuterra (Escuela de Transmutation)" },
    { tipo: "h2", texto: "Planos de las tormentas (Eruditos o magos)" },
    { tipo: "p", texto: "Según las investigaciones y leyendas que se extrajeron a los Seilars, las constelaciones son las puertas a unos planos llamados “Planos de las tormentas” que conectan las diferentes energías mágicas con el plano material." },
    { tipo: "p", texto: "Se cree que estos planos son las baterías de las magias y que solo se componen de una tormenta de energía de cada tipo, siendo imposible entrar y permanecer allí, ya que todo lo que entra es pulverizado en apenas unos segundos." },
    { tipo: "p", texto: "Las energías que desprenden los planos llegan hasta Seilyn en forma de olas o rayos. Una vez en el planeta se dispersan y la gente usa esa energía para poder realizar magia." },
    { tipo: "p", texto: "Hay dos lugares en el planeta clave en cada tormenta, se les llama “puntos de conexión”, y son el lugar más cercano y lejano del planeta respecto a la constelación. La energía que llega desde el plano cae a la tierra en un solo punto, el lugar con más energía de ese tipo, y desde allí se reparte y avanza por todo el planeta como si fuera niebla envolviendo a la tierra, hasta que llega al punto opuesto donde se junta toda la energía y asciende, llegando otra vez al espacio, y así con cada plano de las tormentas. Otro punto de interés también es “el aro”, el lugar más alejado de los dos puntos que hace una circunferencia a través de todo el planeta, y donde la magia se vuelve un poco más poderosa, pero a un nivel menor que en los puntos de conexión." },
    { tipo: "h2", texto: "Funcionamiento Magia (Eruditos o magos)" },
    { tipo: "p", texto: "La magia funciona con la energía de los planos de las tormentas, hay ocho tipos de energías correspondientes a las escuelas de magia, y la energía que viene de estos planos está superpuesta a todas las cosas." },
    { tipo: "p", texto: "Los magos o personajes arcanos mantienen esta energía denominada Ker, dentro de sus cuerpos, y la usan después cuando realizan los hechizos. Estas partículas de energías superpuestas reaccionan frente algunos movimientos, materiales o vibraciones para realizar efectos mágicos específicos, los hechizos coloquialmente hablando." },
    { tipo: "p", texto: "Existen 4 formas de acumular la magia, dependiendo del proceso de transformación de las partículas con ker:" },
    { tipo: "p", texto: "- Kerarc: La usan los Magos, Hechiceros y Bardos. El ker no es transformado de ninguna manera, es la forma más pura de usar la magia, las partículas del aire que portan el ker son el combustible para los hechizos de estos domadores de la magia. Los magos absorben la magia y aprenden a canalizar mientras que los hechiceros usan su cuerpo mutado por el ker para lanzar los hechizos, usan el mismo combustible pero de manera diferente." },
    { tipo: "p", texto: "- Kercan: La usan los paladines, clérigos y brujos. El ker se acumula y se transforma a través de los símbolos representados por los dioses o demonios, después de pasar un tiempo dentro de estos “planos de bolsillo”, el ker se transforma y se usa en los hechizos. Las deidades tienen el poder de bloquear los poderes a alguien a través del símbolo que portan." },
    { tipo: "p", texto: "- Kertal: La usan los druidas o exploradores, estos absorben el Ker que se produce al pasar una gran cantidad de tiempo dentro de plantas o seres vivos, después de eso el ker ya transformado es usado como baterías de forma druídica. " },
    { tipo: "p", texto: "- Kernun: Es la manera más débil del uso del Ker, todo el mundo puede llegar a usarlos, simplemente se necesita dibujar una runa para que se active el efecto correspondiente, los efectos son débiles pero fáciles de activar y usar una vez creados, por ejemplo una caída constante de un pequeño hilo de agua o una runa para crear calor, se forma de manera similar que los símbolos de los Kercan, pero son mucho menos complejos." }
  ]
};


/* ///////////////////////////////////////////////////////// */
/* ===================JS PARA QUE REMPLACE=================== */
/* ///////////////////////////////////////////////////////// */
const params = new URLSearchParams(window.location.search);
const nombreInfo = params.get("nombre");
const contenidoDiv = document.getElementById("contenido");

if (nombreInfo && textosReinos[nombreInfo]) {
  textosReinos[nombreInfo].forEach(item => {
    let elemento;
    if (item.tipo.startsWith("h")) {
      elemento = document.createElement(item.tipo); // h1, h2, h3...
    } else {
      elemento = document.createElement("p");
    }
    elemento.textContent = item.texto;
    contenidoDiv.appendChild(elemento);
  });
} else {
  contenidoDiv.textContent = "No se encontró información para este reino.";
}

/* ///////////////////////////////////////////////////////// */
/* ===================PRUEBA MAPA=================== */
/* ///////////////////////////////////////////////////////// */
function comprobarImagen(src, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = src;
}

if (nombreInfo) {
  const ruta = `../imagenes/ilustraciones/${nombreInfo}.png`;
  comprobarImagen(ruta, existe => {
    if (existe) {
      mapImage.src = ruta;
      mapImage.alt = `Mapa de ${nombreInfo}`;
    } else {
      mapImage.src = `../imagenes/enproceso.png`;
      mapImage.alt = "Mapa genérico";
    }
  });
} else {
  mapImage.src = `../imagenes/enproceso.png`;
  mapImage.alt = "Mapa genérico";
}