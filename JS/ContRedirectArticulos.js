document.addEventListener('DOMContentLoaded', function () {
  var urlParams = new URLSearchParams(window.location.search);
  var Seccion = urlParams.get('Seccion');
  switch (Seccion) {
    case 'HistoriaOrte':
      HistoriaOrte();
      break;
    case 'CambiosFrenteDyD':
      CambiosFrenteDyD();
      break;
    case 'ConocimientoPopular':
      ConocimientoPopular();
      break;
    case 'Ciencias':
      Ciencias();
      break;
    case 'Religion':
      Religion();
      break;
    default:
      break;
  }
});
