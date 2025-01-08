// Referencia a la imagen
const imagenBrazoDch = document.getElementById('brazoDchNino');

// Rutas de las imágenes
const imagenBrazoDch1 = 'img/brazoDch/brazoNinioDch.png';
const imagenBrazoDch2 = 'img/brazoDch/brazoNinioDchSI.png';

// Evento click para alternar imágenes
imagenBrazoDch.addEventListener('click', () => {
    imagenBrazoDch.src = imagenBrazoDch.src.includes(imagenBrazoDch1) ? imagenBrazoDch2 : imagenBrazoDch1;
    if (imagenBrazoDch.src.includes(imagenBrazoDch2)) {
        alert("Bien tocao' maestro");
    }
});