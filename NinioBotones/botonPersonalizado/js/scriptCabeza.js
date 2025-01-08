// Referencia a la imagen
const imagenCabeza = document.getElementById('cabezaNinio');

// Rutas de las imágenes
const imagenCabeza1 = 'img/cabeza/cabezaNinio.png';
const imagenCabeza2 = 'img/cabeza/cabezaNinioSI.png';

// Evento click para alternar imágenes
imagenCabeza.addEventListener('click', () => {
    imagenCabeza.src = imagenCabeza.src.includes(imagenCabeza1) ? imagenCabeza2 : imagenCabeza1;
    if (imagenCabeza.src.includes(imagenCabeza2)) {
        alert("Bien tocao' maestro");
    }
});