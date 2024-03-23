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
    var buttonTerminosAriende = document.createElement("button");
    var buttonFarrelann = document.createElement("button");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonTerminosAriende.textContent = "Terminos Ariende";
    buttonFarrelann.textContent = "Farrelann";
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonFarrelann.onclick = function () {
        window.location.href = "Secciones.html?Posicion=Secciones&Mapa=EnProceso&Seccion=Farrelann";
    };
    buttonTerminosAriende.onclick = function () {
        window.location.href = "Secciones.html?Posicion=Secciones&Mapa=EnProceso&Seccion=TerminosAriende";
    };
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonTerminosAriende);
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

function ContCortamAram() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Cortam Aram";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "Cortan Aram es conocido en todo el mundo como el país de las playas. La costa de Cortan Aram está repleta de playas paradisíacas con arena dorada y un agua de color azul claro que resulta prácticamente transparente, la fauna y la flora apacibles, sin nada que pueda suponer un peligro grave. Además de sus famosas costas, al sur del país, no muy lejos de la costa se puede observar uno de los mayores fenómenos de la naturaleza, la Danza de Estrellas, una escena de lo más única y especial.",
        "El turismo juega un papel importante en la economía de Cortan Aram, por lo que se destinan varios recursos a mantener las costas y playas limpias de residuos, además de preservar el ecosistema de la nación. No obstante, el mayor flujo de personas ocurre cuando se da una Danza de Estrellas, lo que ha hecho que se financien astilleros e ingenieros navales para diseñar embarcaciones con el suelo transparente y astrónomos para predecir con exactitud cuándo ocurrirá una Danza.",
        "Aún así, tras algunos episodios de conflictos y epidemias, se determinó que no era posible depender únicamente del turismo, por lo que se construyeron varios puertos por los que ahora transcurren varias rutas comerciales importantes. Este comercio, junto a la pesca, logra hacer que Cortan Aram tenga una economía importante y sea un país con recursos.",
        "La existencia de la Danza de las Estrellas y la cercanía con el océano ha hecho que Cortan Aram adopte una religión basada en ídolos marinos. No muy lejos del lugar donde ocurre la Danza de las Estrellas, está el Templo de Stella, ahora abandonado y usado solo como atracción turística, donde antaño se realizaban rituales de sacrificio, una práctica también en desuso. Pese a que estas creencias han sido consideradas por muchas otras naciones como paganas, la importación de productos de artesanía que, en ocasiones, guardan relación con estos ídolos marinos, es cada vez más importante en el país.",
        "Hacía el interior, las playas dejan paso a un herbazal que ocupa todo el paisaje, con los ocasionales bosques reducidos de vegetación tropical, con flora de lo más colorida.",
        "En el centro del país se encuentra la capital del país, un lugar bastante austero con una población que se dedica a tareas principalmente rurales en las granjas que existen alrededor de la capital. El resto de núcleos urbanos están no demasiado lejos de las playas, alrededor de los puertos y de algunos puntos turísticos.",
        "Todo lo paradisíaco que rodea a Cortan Aram ha logrado que gente de todas partes haya querido ir en algún momento, las clases más pudientes son las que más tiempo pasan de turismo o las que han decidido mudarse a vivir a este reino. Por este motivo, en Cortan Aram se pueden encontrar humanos, tiflis, medianos, gnomos, elfos y tabasis.",
        "Pero frente a las diferencias que pareciera, pueden existir entre los habitantes, existe una amabilidad y alegría común a todos ellos que les permite llevar un estilo de vida en el que valoran las cosas sencillas, donde aceptan a todo el mundo que quiera visitar el país. Los habitantes de Cortan Aram han inventado muchos de los entretenimientos y juegos que se conocen por el continente, desde juegos de cartas hasta deportes de contacto, además de una amplia variedad de fiestas regionales.",
        "Toda esta mezcla de razas, junto con las diferentes religiones dentro del reino, han hecho que la cultura de Cortan Aram sea única entre todas, que atrae por igual a miembros de todas las razas de cualquier reino."
    ];
    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        section.appendChild(p);
    }

    //Generamos los botones
    var nav = document.getElementById("ContBotonesMapa");
    var buttonDanzaEstrellas = document.createElement("button");
    var buttonSalir = document.createElement("button");
    //Nombres 
    buttonDanzaEstrellas.textContent = "Danza de Estrellas";
    buttonSalir.textContent = "Salir";
    //Enlaces
    buttonDanzaEstrellas.onclick = function () {
        window.location.href = "Secciones.html?Posicion=Secciones&Mapa=EnProceso&Seccion=DanzaEstrellas";
    };
    buttonSalir.onclick = function () {
        window.location.href = "../index.html";
    };
    //Los metemos
    nav.appendChild(buttonDanzaEstrellas);
    nav.appendChild(buttonSalir);
};

function ContDanzaEstrellas() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Danza de Estrellas";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "La Danza de Estrellas es un fenómeno de la naturaleza que existe desde que se descubrió por primera vez cuando comenzó la exploración por el océano. Este lugar al sur de Cortan Aram tiene una peculiaridad, las profundidades oceánicas están formadas por un doble fondo que se conecta con el fondo visible por unas cuevas.",
        "Cuando Louksna se oculta detrás del anillo de asteroides, por estas cuevas emergen criaturas bioluminiscentes, que aprovechan la oscuridad total de la noche para cazar a las desprevenidas presas que no están preparadas para esa amenaza.",
        "De esta manera, la Danza de Estrellas se ha convertido en un evento conocido internacionalmente que atrae a una gran cantidad de gente."
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

function ContTerminosAriende() {
    //Creamos contenedor, añadimos h1 y contenido h1
    var section = document.getElementById("ContenedorParrafos");
    var h1 = document.createElement("h1");
    h1.textContent = "Ferroarcanos (Los magos del metal)";
    section.appendChild(h1);
    // Crear los elementos p y añadimos el texto a la section
    var paragraphs = [
        "Cuando a un joven aprendiz de mago, llamado Karenan Alás, se le ocurrió la idea de juntar lo arcano con la metalurgia, no sabía la importancia que tendría para la posteridad, su estatua enfrente de la sede de Fundiciones Karenan dejaba claro que la invención del ferroarcanismo marcó un antes y un después.",
        "Los ferroarcanistas, también conocidos como magos del metal, poseen grandes conocimientos sobre el tratamiento del metal, habiendo llegado a desarrollar sus propios métodos y herramientas para poder desempeñar sus trabajos e ideas para la forja de armas con propiedades especiales. Estas herramientas poseen grabados rúnicos individuales, muchas veces para forjar un tipo de arma es necesario una herramienta con un grabado determinado y no se puede usar otro. Además, al no ser baratas de conseguir, pues hacen falta algunos de los mejores tejerunas del reino, su valor es incalculable, y suelen ser objetivo de espionaje industrial entre las diferentes compañías de la ciudad.",
        "Es, por todos estos avances, por lo que la ciudad de Farrelann es un faro en el páramo de Ariende, una metrópolis famosa y conocida por sus creaciones."
    ];
    for (var i = 0; i < paragraphs.length; i++) {
        var p = document.createElement("p");
        p.textContent = paragraphs[i];
        section.appendChild(p);
    }

    var h1 = document.createElement("h1");
    h1.textContent = "Guardsens";
    section.appendChild(h1);
    var paragraphs = [
        "Los Guardsens son como se conoce a todos aquellos mercenarios que son contratados principalmente por comerciantes y minoritariamente por turistas y nobles para que garanticen la seguridad de su paso por el reino. Aunque originalmente no tenían nombre, poco a poco, los rumores del éxito de los mercenarios de la ruta comercial de Ariende se extendieron por todo el reino, pues ofrecía un pago digno por un trabajo que resultaba sencillo para muchos de los mercenarios, ya que eran veteranos de guerra o diestros guerreros. Como en bastantes ocasiones los ladrones que intentaban asaltar las caravanas eran poco más que gente pobre que trataba de sobrevivir, bastaba con mostrase amenazador para disuadirlos de atacar."
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