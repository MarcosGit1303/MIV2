document.addEventListener('DOMContentLoaded', function () {
  var urlParams = new URLSearchParams(window.location.search);
  var Seccion = urlParams.get('Seccion');
  switch (Seccion) {
    case 'Linothen':
      ContLinothen();
      break;
    case 'Elian':
      ContElian();
      break;
    case 'Ariende':
      ContAriende();
      break;
    case 'Linthon':
      ContLinthon();
      break;
    case 'Farrelann':
      ContFarrelann();
      break;
    case 'CortamAram':
      ContCortamAram();
      break;
    case 'DanzaEstrellas':
      ContDanzaEstrellas();
      break;
    case 'TerminosAriende':
      ContTerminosAriende();
      break;
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
    case 'RazasOrte':
      RazasOrte();
      break;
    default:
      break;
  }
});
