// Referencia a la imagen
const imagenPantalon = document.getElementById('pantalonNinio');

// Rutas de las imágenes
const imagenPantalon1 = 'img/pantalon/pantalonNinio.png';
const imagenPantalon2 = 'img/pantalon/pantalonNinioNO.png';

// Evento click para alternar imágenes
imagenPantalon.addEventListener('click', () => {
    imagenPantalon.src = imagenPantalon.src.includes(imagenPantalon1) ? imagenPantalon2 : imagenPantalon1;
    if (imagenPantalon.src.includes(imagenPantalon2)) {
        alert("Pero que ase mi arma");
    }
});