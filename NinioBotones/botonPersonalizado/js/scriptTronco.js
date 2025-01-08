// Referencia a la imagen
const imagenTronco = document.getElementById('troncoNinio');

// Rutas de las imágenes
const imagenTronco1 = 'img/tronco/troncoNinio.png';
const imagenTronco2 = 'img/tronco/troncoNinioNO.png';

// Evento click para alternar imágenes
imagenTronco.addEventListener('click', () => {
    imagenTronco.src = imagenTronco.src.includes(imagenTronco1) ? imagenTronco2 : imagenTronco1;
    if (imagenTronco.src.includes(imagenTronco2)) {
        alert("Mal tocao' jefe");
    }
});