/* ///////////////////////////////////////////////////////// */
/* =========================MAPA BASE========================= */
/* ///////////////////////////////////////////////////////// */
const mapa = document.getElementById("mapa");
const mapImage = document.getElementById("mapImage");
const pinLayer = document.getElementById("pinLayer");
const tooltip = document.getElementById("tooltip");

let scale = 1;
let posX = 0, posY = 0;
let isDragging = false;
let startX = 0, startY = 0;

// ===================
// Zoom con la rueda
// ===================
mapa.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomStep = 0.1;
  scale += e.deltaY < 0 ? zoomStep : -zoomStep;
  scale = Math.min(Math.max(0.5, scale), 3);
  updateTransform();
});

// ===================
// Arrastrar
// ===================
mapa.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  updateTransform();
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// ===================
// Tooltip en pines
// ===================
function showTooltip(pin, e) {
  tooltip.textContent = pin.getAttribute("title");
  tooltip.style.display = "block";
  moveTooltip(e);
}

function moveTooltip(e) {
  tooltip.style.left = `${e.pageX + 10}px`;
  tooltip.style.top = `${e.pageY + 10}px`;
}

function hideTooltip() {
  tooltip.style.display = "none";
}

document.querySelectorAll(".pin").forEach((pin) => {
  pin.addEventListener("mouseenter", (e) => showTooltip(pin, e));
  pin.addEventListener("mousemove", moveTooltip);
  pin.addEventListener("mouseleave", hideTooltip);
});

// ===================
// Aplicar transform y cambiar mapa según zoom
// ===================
function updateTransform() {
  const transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  mapImage.style.transform = transform;
  pinLayer.style.transform = transform;

  // Cambiar de mapa según zoom
  if (scale > 1.8 && mapImage.src.includes("Reinos.png")) {
    mapImage.src = "imagenes/mapas/Detalles.png";
  }
  if (scale < 1.8 && mapImage.src.includes("Detalles.png")) {
    mapImage.src = "imagenes/mapas/Reinos.png";
  }

  if (scale > 1) {  
    pinLayer.style.display = "none";   
  } else {
    pinLayer.style.display = "block";
  }
}


// ===================
// Evitar arrastre de imagen por defecto
// ===================
mapImage.addEventListener("dragstart", (e) => e.preventDefault());


// ===================
// Iluminar pin más cercano al cursor
// ===================
const pins = document.querySelectorAll('.pin');

document.addEventListener('mousemove', (e) => {
  let closest = null;
  let minDist = Infinity;

  pins.forEach(pin => {
    const rect = pin.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dist = Math.hypot(centerX - e.clientX, centerY - e.clientY);

    if (dist < minDist) {
      minDist = dist;
      closest = pin;
    }
  });

  pins.forEach(pin => {
    if (pin === closest) {
      pin.style.pointerEvents = 'auto';
    } else {
      pin.style.pointerEvents = 'none';
    }
  });
});

/* ///////////////////////////////////////////////////////// */
/* =========================IMAGEN DEL MAPA========================= */
/* ///////////////////////////////////////////////////////// */
const img = document.getElementById("mapImage");
const btn = document.getElementById("cambiarMapa");

btn.addEventListener("click", () => {
  if (img.src.includes("Reinos.png")) {
    img.src = "imagenes/mapas/Fronteras.png";
    btn.textContent = "Reinos";
  } else {
    img.src = "imagenes/mapas/Reinos.png";
    btn.textContent = "Fronteras";
  }
});


