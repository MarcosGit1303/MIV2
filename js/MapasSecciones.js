var urlParams = new URLSearchParams(window.location.search);
var Mapa = urlParams.get('Mapa');
switch (Mapa) {
  case 'EnProceso':
    var MapaPrincipal = 'imagenes/ENPROCESO.png';
    var MapaSecundario = 'imagenes/ENPROCESO.png';
    var MapaNombres = 'imagenes/mapas/AriendeZoomNombres.png';
    var MapaEscudos = 'imagenes/mapas/AriendeZoomEscudos.png';
    break;
  case 'Fronteras':
    var MapaPrincipal = 'imagenes/mapas/Fronteras.png';
    var MapaSecundario = 'imagenes/mapas/Detalles.png';
    var MapaNombres = 'imagenes/mapas/AriendeZoomNombres.png';
    var MapaEscudos = 'imagenes/mapas/AriendeZoomEscudos.png';
    break;
  case 'Ariende':
    var MapaPrincipal = 'imagenes/mapas/Ariende.jpg';
    var MapaSecundario = 'imagenes/mapas/AriendeZoom.png';
    var MapaNombres = 'imagenes/mapas/AriendeZoomNombres.png';
    var MapaEscudos = 'imagenes/mapas/AriendeZoomEscudos.png';
    break;
  default:
    var MapaPrincipal = 'imagenes/mapas/Reinos.png';
    var MapaSecundario = 'imagenes/mapas/Detalles.png';
    var MapaNombres = 'imagenes/mapas/AriendeZoomNombres.png';
    var MapaEscudos = 'imagenes/mapas/AriendeZoomEscudos.png';
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
      url: '../' + MapaNombres,
    },
    {
      type: 'image',
      url: '../' + MapaEscudos,
    }
  ],
  minZoomLevel: 1,
  maxZoomLevel: 6,
  animationTime: 0.8,
  zoomPerScroll: 1.3,

});

var miContenedor = document.getElementById("openseadragon");
var intervalo;

//Zoom imagenes Basicas
miContenedor.addEventListener("mouseover", function () {
  intervalo = setInterval(function () {
    var currentZoom = viewer.viewport.getZoom();
    var lowResolutionImage = viewer.world.getItemAt(0);
    var highResolutionImage = viewer.world.getItemAt(1);

    highResolutionImage.setOpacity(currentZoom >= 0 && currentZoom < 2 ? 1 : 0);
    lowResolutionImage.setOpacity(currentZoom >= 2 && currentZoom <= 6 ? 1 : 0);
  }, 200);
});

//
var botonNombre = document.getElementById("botonNombre");
var botonEscudo = document.getElementById("botonEscudo");
intervalo = setInterval(visibilidadNombres, 50);

//Boton Nombre activar desactivar
botonNombre.addEventListener("click", function () {
  botonNombre.clicked = !botonNombre.clicked;
  if (botonNombre.clicked) {
    botonNombre.classList.remove("desactivado");
    botonNombre.classList.add("activado");
  } else {
    botonNombre.classList.remove("activado");
    botonNombre.classList.add("desactivado");
  }
});

//Boton Escudos activar desactivar
botonEscudo.addEventListener("click", function () {
  botonEscudo.clicked = !botonEscudo.clicked;
  if (botonEscudo.clicked) {
    botonEscudo.classList.remove("desactivado");
    botonEscudo.classList.add("activado");
  } else {
    botonEscudo.classList.remove("activado");
    botonEscudo.classList.add("desactivado");
  }
});

// Función para controlar la visibilidad de la imagen adicional
function visibilidadNombres() {
  var currentZoom = viewer.viewport.getZoom();
  var imagenNombres = viewer.world.getItemAt(2);
  var imagenEscudos = viewer.world.getItemAt(3);
  if (currentZoom >= 2 && currentZoom <= 6 && botonNombre.clicked) {
    imagenNombres.setOpacity(1);
  } else {
    imagenNombres.setOpacity(0);
  }
  if (currentZoom >= 2 && currentZoom <= 6 && botonEscudo.clicked) {
    imagenEscudos.setOpacity(1);
  } else {
    imagenEscudos.setOpacity(0);
  }
}