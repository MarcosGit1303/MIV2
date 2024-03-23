function ContLinothen() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Linothen";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "Linothen es, quizá, la joya de la humanidad en este mundo. El reino humano más grande de todo el continente, que otrora fue dominado por los mismísimos Seilars, está formado por los reinos que sus descendientes conquistaron y absorbieron. Este antiguo imperio sobrevivió durante varios siglos, hasta que las ansias de poder egoístas hicieron mella en lo que antes eran los ideales y el esfuerzo colectivo para lograr el mejor imperio jamás conocido. Poco a poco las fracturas internas se acentuaron: surgieron virreinatos, condados, países independientes, hasta que finalmente, el gobierno principal cayó, y reinaron el acero y la sangre.",
        "En la actualidad se intentan subsanar todas estas heridas, y sabiéndose después que todas, si no la mayoría, de las intrigas políticas que causaron las divisiones fueron disparadas mediante el espionaje y el subterfugio, ahora se permite la libertad a todos estos territorios, con la condición de jurar servir a Linothen. Todas estas libertades concedidas hacen que los líderes de estos reinos satélite se envalentonen, quizá, recordando el espíritu que antaño poseyeron sus ancestros, y por tanto cada vez se vuelven más poderosos e independientes de Linothen.",
        "El reino está poblado por una multitud de razas: humanos, gnomos, enanos, medianos y los ocasionales viajeros de los reinos de los bosques. Son personas tranquilas y pacíficas, que prefieren la comodidad de la paz al ser conscientes de la historia tan manchada por la guerra que tiene su imperio, y la miseria que trae la guerra para la gente de a pie. La prosperidad puede florecer también en tiempos de paz, y eso lo saben bien los habitantes del reino, que aprovechan las fértiles tierras de cultivo que tiene el reino, gracias a las cuales se pueden alimentar los reinos vecinos.",
        "La excepcional fertilidad de la tierra se debe a un río que cruza el reino y lo divide en dos partes: norte y sur. El caudaloso río sufre desbordamientos anuales, una molestía menor para los granjeros que luego gozan durante el resto del año de unas cosechas abundantes y unos bolsillos llenos. Por la parte sur del reino se construyó un camino excepcional, que es ahora una importante ruta comercial, llamada la Ruta de la Seda. Es en Linothen donde los comerciantes se aprovisionan de la seda que se cultiva a orillas del río para venderla por el resto de reinos."
    ];
    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonLinthon = document.createElement("button");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonLinthon.textContent = "Linthon";
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonLinthon.onclick = function () {
        window.location.href = "Secciones.html?Posicion=Secciones&Mapa=EnProceso&Seccion=Linthon";
    };
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonLinthon);
    nav.appendChild(buttonSalir);
};

function ContAriende() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Ariende";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "Ariende, un conato de reino tan ligado a la guerra como al propio acero por el que se le conoce. Su historia está manchada por las guerras civiles, las trifulcas entre caudillos, puñaladas por la espalda entre los nobles y todo tipo de conflictos que uno se pueda imaginar.",
        "Esta imagen extendida por todo el reino contrasta enormemente con la vida en Puerto Blanco, uno de los pocos lugares del reino, junto a Farrelann, donde el corrupto ejército del reino no es capaz de influir, ya que la ciudad tiene su propia guarnición y defensas de la época Seilar.",
        "Uno podría pensar que en ambas ciudades debería existir la misma corrupción en los dirigentes como sucede en el resto del reino, pero no es así. En el caso de Farrelann,  la ciudad se rige por algunos de los académicos que ya no trabajan activamente en el campo del ferroarcanismo. Se dedican a gobernar de forma altruista sin recibir nada a cambio, motivo por el que resulta tan complicado influenciarlos.",
        "En el caso de Puerto Blanco, es la orden mercantil la que rige. Siendo este lugar tan importante para los negocios, resulta de alta prioridad mantenerlo en marcha, y ninguno de los ejércitos que pretenda tomar Puerto Blanco tiene más dinero para sobornar a las autoridades que el que la ciudad puede ganar en un día.",
        "El resto del reino no tiene grandes hitos, la mayoría del terreno son praderas con hierbas altas poco dignas de mención, con algunos asentamientos esparcidos aquí y allá, cerca de las minas de hierro que hay en el país o cerca de la ruta mercante que atraviesa el reino. Existe un dicho entre los Ariendanos que dice que los Seilar construyeron primero Puerto Blanco y luego Farrelann y después se cansaron de arrancar hierbajos.",
        "Sus habitantes son principalmente humanos, gnomos y medianos, aunque gracias a la ruta comercial es posible ver de todo tipo de habitantes del país. Por culpa de las guerras, los residentes en Atiende son personas rudas, toscas, de carácter difícil, en muchas ocasiones testarudas y quizá algo desconfiadas, aunque siempre tendrán unas palabras amables para aquellos que muestren buenas intenciones y amistad.",
    ];
    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonFarrelann = document.createElement("button");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonFarrelann.textContent = "Farrelann";
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonFarrelann.onclick = function () {
        window.location.href = "Secciones.html?Posicion=Secciones&Mapa=EnProceso&Seccion=Farrelann";
    };
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonFarrelann);
    nav.appendChild(buttonSalir);
};

function ContElian() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Elian";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "Trabajando en ello",
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

function ContLinthon() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Linthon";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "Trabajando en ello",
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

function ContFarrelann() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Farrelann";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "arrelann es la ciudad más grande de todo el reino de Ariende y capital del mismo. Flanqueada por sus legendarias murallas negras con los estandartes azules con el escudo de la familia real ondeando en cada torre.",
        "Pese a que la ciudad no tiene ninguna frontera natural que la divida, el paso de la ruta comercial más famosa e importante del país ha logrado convertir la parte oeste de la ciudad en un importante núcleo económico, con diversos bancos de importancia estatal y almacenes de víveres y otros productos.",
        "Por descontado, que la ruta pase por Farrelann no es casualidad, pues la otra parte de la ciudad es por la que recibe ese sobrenombre.",
        "Grandes edificios con chimeneas humeantes, construidos con ladrillos rojizos que logran hacer que desde los lugares más altos de la ciudad, esa parte parezca un mar carmesí.",
        "En estos edificios los ferroarcanistas de Farrelann desarrollan sus investigaciones y trabajos, con la tecnología puntera del reino empleada en las forjas, tejerunas, altos hornos, fraguas arcanas y demás herramientas que son demasiado complejas para explicar resumidamente.",
        "Los ferroarcanistas son conocidos en todo el reino gracias a sus avances en el campo de lo arcano aplicado a la metalurgia, logrando abaratar enormemente los costes de producción. Gracias a este desarrollo, la ciudad decidió invertir otrora en diferentes instituciones académicas como universidades y academias militares, para que el oficio del ferroarcanismo no caiga en el desuso.",
        "Alrededor de estas academias se comenzaron a asentar las gentes de clases pudientes, ya que eran las más interesadas en que sus hijos tuvieran unos estudios gracias a su capital.",
        "La joya de la corona de la ciudad se encuentra en la parte más alta, visible desde el exterior por encima de las murallas negras, el palacio real se alza imponente con sus doradas torres, que reflejan la luz, apuntando hacía el cielo, dando una imagen imponente a todo el que ose poner un pie hostil en las inmediaciones de la ciudad."
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