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