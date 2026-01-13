const btnEscudos = document.getElementById("btnEscudos");
const escudosOverlay = document.getElementById("escudosOverlay");

btnEscudos.addEventListener("click", () => {
    // Si está oculto (opacity 0), lo mostramos
    if (escudosOverlay.style.opacity === "0" || escudosOverlay.style.opacity === "") {
        escudosOverlay.style.opacity = "1";  // totalmente visible
    } else {
        escudosOverlay.style.opacity = "0";  // transparente
    }
});


/* ///////////////////////////////////////////////////////// */
/* =========================MAPA REINO====================== */
/* ///////////////////////////////////////////////////////// */

// ===================
// Zoom con la rueda
// ===================
mapa.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomSpeed = 0.1;
  if (e.deltaY < 0) {
    scale = Math.min(scale + zoomSpeed, 4); // máximo x4
  } else {
    scale = Math.max(scale - zoomSpeed, 1); // mínimo x1
  }
  actualizarMapa();
});

// ===================
// Arrastrar con el ratón
// ===================
mapa.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  actualizarMapa();
});
