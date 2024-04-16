var urlParams = new URLSearchParams(window.location.search);
var Mapa = urlParams.get('Mapa');
switch (Mapa) {
  case 'EnProceso':
    var MapaPrincipal = 'imagenes/ENPROCESO.png';
    var MapaSecundario = 'imagenes/ENPROCESO.png';
    break;
  case 'Fronteras':
    var MapaPrincipal = 'imagenes/Mapas/Fronteras.png';
    var MapaSecundario = 'imagenes/Mapas/Detalles.png';
    break;
  case 'Ariende':
    var MapaPrincipal = 'imagenes/Mapas/Ariende.jpg';
    var MapaSecundario = 'imagenes/Mapas/AriendeZoom.png';
    break;
  default:
    var MapaPrincipal = 'imagenes/Mapas/Reinos.png';
    var MapaSecundario = 'imagenes/Mapas/Detalles.png';
    break;
}

var viewer = OpenSeadragon({
  id: 'openseadragon',
  prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/',
  tileSources: [
    {
      type: 'image',
      url: '../' + MapaSecundario,
    },
    {
      type: 'image',
      url: '../' + MapaPrincipal,
    },
    {
      type: 'image',
      url: '../imagenes/Mapas/AriendeZoomNombres.png',
    }
  ],
  minZoomLevel: 1,
  maxZoomLevel: 6,
  animationTime: 0.8,
  zoomPerScroll: 1.3,

});

// Obtén el contenedor por su id
var miContenedor = document.getElementById("openseadragon");

// Variable para almacenar el identificador del intervalo
var intervalo;

// Agrega un event listener para el evento mouseover
miContenedor.addEventListener("mouseover", function () {
  // Inicia la acción deseada utilizando setInterval
  intervalo = setInterval(function () {
    var currentZoom = viewer.viewport.getZoom();

    // Obtener referencias a las imágenes cargadas
    var lowResolutionImage = viewer.world.getItemAt(0);
    var highResolutionImage = viewer.world.getItemAt(1);

    // Cambiar la visibilidad de las imágenes según el nivel de zoom
    highResolutionImage.setOpacity(currentZoom >= 0 && currentZoom < 2 ? 1 : 0);
    lowResolutionImage.setOpacity(currentZoom >= 2 && currentZoom <= 6 ? 1 : 0);
  }, 200);
});

// Agrega un event listener para el evento mouseout
miContenedor.addEventListener("mouseout", function () {
  // Detiene la acción cuando el ratón sale del contenedor utilizando clearInterval
  clearInterval(intervalo);
});

// Obtén una referencia al botón por su id
var botonNombre = document.getElementById("botonNombre");
var intervalo;
// Llamar a la función para controlar la visibilidad dentro de un intervalo que se ejecuta continuamente
intervalo = setInterval(controlarVisibilidad, 50);

// Agrega un event listener para el evento 'click' en el botón
botonNombre.addEventListener("click", function () {
  // Cambia el estado del botón (mostrar/ocultar)
  botonNombre.clicked = !botonNombre.clicked;
});

// Función para controlar la visibilidad de la imagen adicional
function controlarVisibilidad() {
  var currentZoom = viewer.viewport.getZoom();
  var imagenNombres = viewer.world.getItemAt(2);

  // Verificar ambas condiciones y cambiar la opacidad
  if (currentZoom >= 2 && currentZoom <= 6 && botonNombre.clicked) {
    imagenNombres.setOpacity(1);
  } else {
    imagenNombres.setOpacity(0);
  }
}