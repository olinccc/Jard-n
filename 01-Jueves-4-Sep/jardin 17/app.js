console.log("jardin 17 - canals");

document.addEventListener('DOMContentLoaded', () => {
    // Configuración del lienzo
    const lienzo = document.getElementById('lienzo');
    console.log('Lienzo configurado: 1440x750px');
    
    // Cargar imagen de fondo
    lienzo.style.backgroundImage = "url('./fotos/amanecer.jpg')";
    lienzo.style.backgroundSize = 'cover';
    lienzo.style.backgroundPosition = 'center';
    lienzo.style.backgroundRepeat = 'no-repeat';
    
    console.log('Imagen de fondo cargada: amanecer.jpg');
});