console.log("Hola mundo");

const rect = document.getElementById("rectangulo");

rect.addEventListener("click", (event) => {
  const padding = 10; // pequeño margen para no tocar los bordes

  // Dimensiones de ventana y del rectángulo
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const rectWidth = rect.offsetWidth;
  const rectHeight = rect.offsetHeight;

  // Posición del clic
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Definir los límites máximos para que no se salga
  const maxX = windowWidth - rectWidth - padding;
  const maxY = windowHeight - rectHeight - padding;
  const minX = padding;
  const minY = padding;

  // Distancia mínima desde el mouse
  const minDistance = 150;

  let newX, newY;

  // Buscar posición alejada del mouse y dentro de límites
  do {
    newX = Math.random() * (maxX - minX) + minX;
    newY = Math.random() * (maxY - minY) + minY;
  } while (Math.hypot(newX - mouseX, newY - mouseY) < minDistance);

  // Mover usando GSAP (ajustando x/y relativos al layout)
  gsap.to(rect, {
    duration: 0.6,
    x: newX - rect.offsetLeft,
    y: newY - rect.offsetTop,
    ease: "power2.out"
  });
});
