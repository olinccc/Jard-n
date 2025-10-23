// Animación sutil de respiración en el título
const title = document.querySelector('.title');
let t = 0;

function floatTitle() {
  t += 0.02;
  const y = Math.sin(t) * 5; // movimiento vertical suave
  title.style.transform = `translateY(${y}px)`;
  requestAnimationFrame(floatTitle);
}

floatTitle();

