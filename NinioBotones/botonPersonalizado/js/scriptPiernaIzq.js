// Referencia a la imagen
const imagenPiernaIzq = document.getElementById('piernaIzqNino');

// Rutas de las imágenes
const imagenPiernaIzq1 = 'img/piernaIzq/piernaNinioIzq.png';
const imagenPiernaIzq2 = 'img/piernaIzq/piernaNinioIzqNO.png';

// Evento click para alternar imágenes
imagenPiernaIzq.addEventListener('click', () => {
    imagenPiernaIzq.src = imagenPiernaIzq.src.includes(imagenPiernaIzq1) ? imagenPiernaIzq2 : imagenPiernaIzq1;
    if (imagenPiernaIzq.src.includes(imagenPiernaIzq2)) {
        alert("Ahí no eh");
    }
});