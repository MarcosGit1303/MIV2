function CambiosFrenteDyD() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Diferencia D&D";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "-Los humanos viven en torno a unos 100 años, los enanos 150, los elfos 250, los gnomos unos 120, los tiflins unos 90, medianos 110, y el resto de razas humanoides oscilan entre los 90 y 300 años.",
        "-Los tiflins son una raza más, se necesitan dos tiflins igual que en el resto de humanoides y no es una maldición.",
        "-Los elfos necesitan dormir 8 horas, igual que el resto de razas humanoides, sean quienes sean.",
        "-Los brujos no tienen por qué pactar con un demonio, también pueden pactar con los propios seilars, u otras entidades."
    ];
    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonSalir);
};

function Religion() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Religion - General";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "En el continente Orte sólo está extendida una “Religión” representada por los Seilars, cada uno de ellos tiene un aspecto diferentes así como conexiones con distintas fuerza primordiales, pero no son más que otra raza con capacidades extraordinarias y muy poderosas, con un entendimiento mayor de la realidad y un dominio de la magia que supera a la de los mortales. ",
        "Entre sus capacidades se encuentran su uso ilimitado de la magia y de las escuelas de poder, no necesitan comer, beber, dormir ni descansar, no son inmortales pero nunca envejecen, hay maneras de matarlos pero es casi imposible para un mortal, son “hermafroditas” tiene una forma masculina y otra femenina, que pueden cambiar a placer además de poder hacer copias de sí mismos.",
        "La gente les reza para obtener su favor y comunicarse con ellos, pedir ayuda en alguna situación. Existen tradiciones que ellos mismos iniciaron, fiestas de algún tipo o ritos funerarios para cada uno de ellos. No se les ve como dioses, ya que no es la misma percepción de fe que tenemos en la tierra, en Orte estos seilars existieron de verdad y caminaron con los seres vivos una vez, por lo que el rezo y la fe es más bien una forma de conseguir poder o conocimiento, o una manera de regir las leyes o la ética de cada persona. Los más famosos son:",
        "Zal - Cabellos largos dorados, compostura ágil y resbaladiza, se representa con una espada y cetro dorados, además de túnicas blancas, representa el sol, la luz y la justicia.",
        "Nur - Cabellos semi largos por debajo de las orejas negros, con orejas un poco alargadas, un cuerpo esbelto y alargado, elegante, con vestimentas verdes y marrones, se muestra con un arco y un lobo gris gigante, representa la naturaleza, bosques, animales.",
        "Jun - Un cuerpo grisáceo, muy musculado sin pelo, sustituido por una piel rocosa en algunas partes de su cuerpo, se le representa con solo unos pantalones y largos y un gran cinturón, su arma es un gran martillo con un mango excesivamente largo, representa las montañas y tierra.",
        "Ces - Un cuerpo esbeltico, pelos de fuego que ascienden unos 30 centímetros hacia arriba, sus brazos acaban en colores rojos y lleva finas túnicas, se representa con dos espadas gemelas y llamas en las manos y cabeza, representa el fuego y los volcanes.",
        "Jor - Largos cabellos de color negro, trenzados en su mayoria, vestido con pequeñas placas de cuero y una semiarmadura con algunos atavios marineros con cuerdas o redes, porta una lanza plateada y representa a los oceanos y el agua.",
    ];
    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonSalir);
};

function Ciencias() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Historia Orte";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs1 = [
        "Existe un solo sol igual que en la tierra, hay 6 planetas más que se conozcan (Uetune, Onus, Angiea, Itheshan, Bocury, Nopra) todos en orden y el nuestro Seilyn en 4 posición, también tiene un asteroide llamado Louksna, además de un cinturón de asteroides. Hay un total de 8 constelaciones reconocibles y popularizadas que representan las 8 escuelas de la magia, y se creen que son la puerta a diferentes planos de las tormentas. Constelación de Astralium (Escuela de Abjuration) Constelación de Pyroventus (Escuela de Evocation) Constelación de Illusoria (Escuela de Illusion) Constelación de Divinora (Escuela de Divination) Constelación de Necrosombra (Escuela de Necromancy) Constelación de Elementalys (Escuela de Elemental) Constelación de Enchantaris (Escuela de Enchantment) Constelación de Transmuterra (Escuela de Transmutation)"
    ];
    var paragraphs2 = [
        "Según las investigaciones y leyendas que se extrajeron a los Seilars, las constelaciones son las puertas a unos planos llamados “Planos de las tormentas” que conectan las diferentes energías mágicas con el plano material. Se cree que estos planos son las baterías de las magias y que solo se componen de una tormenta de energía de cada tipo, siendo imposible entrar y permanecer allí, ya que todo lo que entra es pulverizado en apenas unos segundos. Las energías que desprenden los planos llegan hasta Seilyn en forma de olas o rayos. Una vez en el planeta se dispersan y la gente usa esa energía para poder realizar magia. Hay dos lugares en el planeta clave en cada tormenta, se les llama “puntos de conexión”, y son el lugar más cercano y lejano del planeta respecto a la constelación. La energía que llega desde el plano cae a la tierra en un solo punto, el lugar con más energía de ese tipo, y desde allí se reparte y avanza por todo el planeta como si fuera niebla envolviendo a la tierra, hasta que llega al punto opuesto donde se junta toda la energía y asciende, llegando otra vez al espacio, y así con cada plano de las tormentas. Otro punto de interés también es “el aro”, el lugar más alejado de los dos puntos que hace una circunferencia a través de todo el planeta, y donde la magia se vuelve un poco más poderosa, pero a un nivel menor que en los puntos de conexión."
    ];
    var h2 = document.createElement("h2");
    h2.textContent = "Astrología (Eruditos o estudiantes principiantes)";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs1.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs1[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "Planos de las tormentas (Eruditos o magos)";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs2.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs2[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonSalir = document.createElement("button");
    //Nombres
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonSalir);
};

function ConocimientoPopular() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Historia Orte";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs1 = [
        "Zalten, Nurten, Junte, Jorten, Cesten, Lunten, Solten, son los días de la semana, representando a los 5 primeros Seilars y a las dos familias principales de Seilars que conquistaron el continente."
    ];
    var paragraphs2 = [
        "Hay 8 Meses de 56 días con un total de 8 semanas cada uno de ellos, son Reyen, Felten, Pasdel, Teldel, Sanfel, Filfel, Supday, Yelday, dos meses por cada una de las estaciones."
    ];
    var paragraphs3 = [
        "Duran 112 días, cumpliendo los dos meses exactos, funcionan de la misma manera que en la tierra y cada una de ellas tiene una festividad para celebrar su llegada (Sólo en el continente orte, dependiendo del continente o cultura se celebran diferentes cosas en diferentes momentos)"
    ];
    var paragraphs4 = [
        "Tiene 448 días, haciendo que la vuelta al sol sea un poco más larga que en la tierra, el planeta Seilyn es más grande que la tierra con mismas formas, sosteniendo así a Louksna y el cinturón de asteroides."
    ];
    var h2 = document.createElement("h2");
    h2.textContent = "- Semana (General)";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs1.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs1[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "- Meses (General)";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs2.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs2[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "- Estaciones (General)";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs3.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs3[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "- Año (General)";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs4.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs4[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonReligion = document.createElement("button");
    var buttonMagia = document.createElement("button");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonReligion.textContent = "Religion";
    buttonMagia.textContent = "Ciencias";
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonReligion.onclick = function () {
        window.location.href = "Articulos.html?Mapa=EnProceso&Seccion=Religion";
    };
    buttonMagia.onclick = function () {
        window.location.href = "Articulos.html?Mapa=EnProceso&Seccion=Ciencias";
    };
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonReligion);
    nav.appendChild(buttonMagia);
    nav.appendChild(buttonSalir);
};

function HistoriaOrte() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Historia Orte";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs1 = [
        "Toda la historia conocida comienza con el nacimiento de los Seilar. Se dividían por familias dependiendo del lugar en el que nacieron y de los poderes que tuvieran. Tras su aparición, según los registros, es donde los mortales comenzaron a contar los años, puesto que fueron los propios Seilar los que les enseñaron la mayoría de las cosas.",
        "Ellos son la raza superior que gobernó durante mucho tiempo los distintos reinos además de protegerlos de distintas amenazas como Rol, un Seilar cuyas ambiciones fueron desechar a todos los mortales que no quisieran someterse a su mandato.",
        "La familia Muan, defendió a los reinos humanos y les ayudó a prosperar de la manera correcta, les enseño las principales artes de la magia, artesanía, recolección, escritura, gobierno, etc.. Después de ellos apareció la familia Elten cuyos miembros ayudaron de igual forma a los elfos a desarrollarse.",
        "Durante varios siglos la paz perduró, los Seilars ayudaban a los mortales a construir grandes lugares como el puerto de Henred o Puerto Plateado uno de los mayores lugares creados por los seilars."
    ];
    var paragraphs2 = [
        "Llegado el momento, el resto de razas se rebelaron contra los Seilars y echaron a la familia Muan, ya que Rol fue plantando a lo largo del tiempo semillas de rencor por todos los reinos a los que ayudaron los Muan, así cuando al final se revelaron las razas, los Seilars no plantaron resistencia alguna, y con la ayuda de la familia Elten y los pocos vasallos que les apoyaban, se echaron a la mar para crear sus propias tierras a las que gobernar, después de eso, los distintos reinos del continente gozaron una gran paz durante varias décadas. Los humanos fueron la raza que más se extendió por el continente ya que los primeros Seilars nacieron allí, seguida de los elfos que ocuparon la mayor parte de los grandes bosques, los enanos se agruparon en una sola montaña, y se esparcieron por el resto de los reinos como grandes artesanos, el resto de razas como gnomos y medianos, se unieron principalmente a los reinos humanos como comerciantes nómadas o altos cargos en las cortes como consejeros, además de formar sus propias sociedades de nobles.",
        "Pero la paz no duraría para siempre ya que Rol se infiltró en los diferentes países con la ayuda de sus aliados, fomentando el malestar en las ciudades y generando revueltas a lo largo del imperio humano, lo que llevó a los gobernantes a pedir ayuda a los antiguos Seilars, los cuales después de crear la isla de Lumina regresaron con grandes ejércitos y criaturas sobrenaturales, impidiendo así la invasión de Rol al imperio, durante varios años los ejércitos de Zal y Rol lucharon a lo largo del imperio provocando grandes daños y muertes, hasta que el ancho de cada ejército se enfrentó en una sola batalla en el campo de Paldnor, fue la batalla decisiva que puso fin a una larga guerra, Rol fue derrotado y encerrado, en el bando de Zal murieron varios Seilar y criaturas importantes.",
        "Pero este no fue el fin, algunos de los secuaces de Rol huyeron, lo que hizo que Zal se volviera loco y les persiguiera, separó su fortaleza del plano material creando un plano propio, y los Seilars se fueron separando y desperdigados por todo el continente de Orte. Después de esto las apariciones de los Seilars menguaron con el tiempo, algunos de ellos no se volvieron a ver y otros se camuflaban entre las sociedades, las personas desarrollaron cultos para pedir que volvieran los Seilars, pero sin resultado alguno."
    ];
    var paragraphs3 = [
        "Los años fueron pasando y el mundo olvidó a los Seilars, de ellos solo quedaron las grandes construcciones, y los diferentes cultos que se crearon. Los reinos humanos se sumieron en guerras civiles constantes, los enanos se separaron aún más de todos los demás reinos, y los elfos desarrollaron su cultura hasta los mismos niveles que los humanos, pero entorno a 1000 años después de la desaparición de los Seilars, en Centron, comenzaron a fluctuar varias ramificaciones de magia, y se crearon distintos portales hacia una nueva dimensión, de la cual, vinieron grandes demonios y seres paranormales y conquistaron la tierra de Centron, devastando las ciudades y prados, terraformando lo que alguna vez fueron grandes campos de cultivos, y llanuras rocosas, y grandes acantilados, en apenas un par de meses se creó lo que se llama el valle del Contre el lugar más desolado del continente Orte. En su contraparte, los reinos humanos tuvieron noticia de esta invasión, por lo que se prepararon para la inminente guerra. Una vez más las distintas razas mortales se volvieron a unir para repeler al nuevo invasor de otro plano, durante casi 100 años hubo una guerra entre los demonios y los mortales, en la cual los “héroes” toman mucho protagonismo, personas que dedicaron su vida entera a luchar de diferentes formas y con poderes sobrenaturales contra los demonios, algunas personas dicen que eran elegidos de los antiguos Seilars que les prestaron sus poderes para poder enfrentar a los demonios que asolaban las tierras, otras personas creen que vinieron de otros planos de la existencia desconocidos y que ayudaron a los mortales por alguna razón, sea como fuese, los héroes jugaron un gran papel en esta guerra y con su ayuda se consiguió repeler y encerrar a varios de los demonios mas poderosos, calmando la situación en los reinos mortales y transformando a Centron, por Concrok ya que después de la guerra solo quedo un valle de acantilados desiertos y muerte por todo el territorio.",
        "Pero la paz no duraría para siempre ya que Rol se infiltró en los diferentes países con la ayuda de sus aliados, fomentando el malestar en las ciudades y generando revueltas a lo largo del imperio humano, lo que llevó a los gobernantes a pedir ayuda a los antiguos Seilars, los cuales después de crear la isla de Lumina regresaron con grandes ejércitos y criaturas sobrenaturales, impidiendo así la invasión de Rol al imperio, durante varios años los ejércitos de Zal y Rol lucharon a lo largo del imperio provocando grandes daños y muertes, hasta que el ancho de cada ejército se enfrentó en una sola batalla en el campo de Paldnor, fue la batalla decisiva que puso fin a una larga guerra, Rol fue derrotado y encerrado, en el bando de Zal murieron varios Seilar y criaturas importantes.",
        "Pero este no fue el fin, algunos de los secuaces de Rol huyeron, lo que hizo que Zal se volviera loco y les persiguiera, separó su fortaleza del plano material creando un plano propio, y los Seilars se fueron separando y desperdigados por todo el continente de Orte. Después de esto las apariciones de los Seilars menguaron con el tiempo, algunos de ellos no se volvieron a ver y otros se camuflaban entre las sociedades, las personas desarrollaron cultos para pedir que volvieran los Seilars, pero sin resultado alguno."
    ];
    var paragraphs4 = [
        "Después de varios siglos de guerra la situación se estabilizó con los demonios, los tieflings y otras razas demoníacas comenzaron a mezclarse con la población de los distintos reinos. A la par de eso, los antiguos “héroes” se alzaron con el poder después de la guerra y la muerte de algunos de los principales reyes, unificando a la mayoría de los reinos humanos y algún reino élfico, naciendo así el imperio Gregon. En este nuevo imperio los reyes no existían y gobernaban un grupo de sabios descendientes de los héroes que mejoraron la situación general del imperio, ampliando las rutas de comercio, mejoraron las infraestructuras y gobernaron sabiamente, copiando de alguna manera la antigua civilización del imperio de lumina, pero la calma no duró mucho, ya que después de un par de siglos el consejo de sabios comenzó a corromperse y crear malestar entre la población de los distintos reinos, haciendo así que naciera una revolución, la cual acabaría con el reinado de los Gregon, y con el alzamiento de una nueva línea de gobernantes."
    ];
    var paragraphs5 = [
        "La actualidad."
    ];
    var h2 = document.createElement("h2");
    h2.textContent = "Era Seilar";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs1.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs1[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "Era del humano";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs2.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs2[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "Era Del Fuego Y Los Héroes";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs3.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs3[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "Era de los Gregon";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs4.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs4[i];
        section.appendChild(p);
    }
    var h2 = document.createElement("h2");
    h2.textContent = "2 Era del humano";
    section.appendChild(h2);
    for (var i = 0; i < paragraphs5.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs5[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonSalir);
};