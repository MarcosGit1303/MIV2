var urlParams = new URLSearchParams(window.location.search);
var Mapa = urlParams.get('Mapa');
switch (Mapa) {
  case 'EnProceso':
    var MapaPrincipal = 'imagenes/ENPROCESO.png';
    var MapaSecundario = 'imagenes/ENPROCESO.png';
    break;
  case 'Fronteras':
    var MapaPrincipal = 'imagenes/mapas/Fronteras.png';
    var MapaSecundario = 'imagenes/mapas/Detalles.png';
    break;
  default:
    var MapaPrincipal = 'imagenes/mapas/Reinos.png';
    var MapaSecundario = 'imagenes/mapas/Detalles.png';
    break;
}

var viewer = OpenSeadragon({
  id: 'openseadragon',
  prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/',
  tileSources: [
    {
      type: 'image',
      url: MapaSecundario,
    },
    {
      type: 'image',
      url: MapaPrincipal,
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
    var imageBasic = viewer.world.getItemAt(0);
    var imageZoom = viewer.world.getItemAt(1);

    // Cambiar la visibilidad de las imágenes según el nivel de zoom
    imageBasic.setOpacity(currentZoom >= 2 && currentZoom <= 6 ? 1 : 0);
    imageZoom.setOpacity(currentZoom >= 0 && currentZoom < 2 ? 1 : 0);
  }, 200);
});

