console.log("jardín 16.");

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const labels = ['Uno','Dos','Tres','Cuatro','Cinco','Seis'];

  for (let i = 0; i < 6; i++) {
    const sq = document.createElement('div');
    sq.className = 'square';
    sq.setAttribute('role', 'listitem');
    sq.innerHTML = `<div><strong>Cuadro ${i + 1}</strong><small>${labels[i]}</small></div>`;

    // Ejemplo: cambiar tamaño individual (descomenta/ajusta si quieres)
    // if (i === 2) sq.style.setProperty('--square-max', '160px');

    grid.appendChild(sq);
  }
});