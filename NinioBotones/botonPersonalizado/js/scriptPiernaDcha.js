// Referencia a la imagen
const imagenPiernaDch = document.getElementById('piernaDchNino');

// Rutas de las imágenes
const imagenPiernaDch1 = 'img/piernaDch/piernaNinioDch.png';
const imagenPiernaDch2 = 'img/piernaDch/piernaNinioDchNO.png';

// Evento click para alternar imágenes
imagenPiernaDch.addEventListener('click', () => {
    imagenPiernaDch.src = imagenPiernaDch.src.includes(imagenPiernaDch1) ? imagenPiernaDch2 : imagenPiernaDch1;
    if (imagenPiernaDch.src.includes(imagenPiernaDch2)) {
        alert("Ahí no eh");
    }
});