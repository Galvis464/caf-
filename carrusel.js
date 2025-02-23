let indice = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    
    indice += direccion;

    if (indice >= imagenes.length) {
        indice = 0;
    } else if (indice < 0) {
        indice = imagenes.length - 1;
    }

    const anchoCarrusel = -indice * 100; // Cambiar el ancho según el número de imágenes
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${anchoCarrusel}%)`;
}

// Iniciar el carrusel automático
setInterval(() => cambiarImagen(1), 9000);