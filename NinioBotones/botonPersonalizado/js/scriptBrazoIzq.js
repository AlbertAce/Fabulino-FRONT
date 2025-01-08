// Referencia a la imagen
const imagenBrazoIzq = document.getElementById('brazoIzqNino');

// Rutas de las imágenes
const imagenBrazoIzq1 = 'img/brazoIzq/brazoNinioIzq.png';
const imagenBrazoIzq2 = 'img/brazoIzq/brazoNinioIzqSI.png';

// Evento click para alternar imágenes
imagenBrazoIzq.addEventListener('click', () => {
    imagenBrazoIzq.src = imagenBrazoIzq.src.includes(imagenBrazoIzq1) ? imagenBrazoIzq2 : imagenBrazoIzq1;
    if (imagenBrazoIzq.src.includes(imagenBrazoIzq2)) {
        alert("Bien tocao' maestro");
    }
});