console.log("Hola mundo");

const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

// Ajustar el tamaño del canvas a toda la ventana
function ajustarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
ajustarCanvas();

// Parámetros del patrón
const cellSize = 50; // Tamaño de cada celda
const cols = Math.ceil(canvas.width / cellSize);
const rows = Math.ceil(canvas.height / cellSize);

// Estilo de dibujo
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

// Dibujar líneas diagonales alternadas en cada celda
for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const posX = x * cellSize;
    const posY = y * cellSize;

    ctx.beginPath();
    if ((x + y) % 2 === 0) {
      ctx.moveTo(posX, posY);
      ctx.lineTo(posX + cellSize, posY + cellSize);
    } else {
      ctx.moveTo(posX, posY + cellSize);
      ctx.lineTo(posX + cellSize, posY);
    }
    ctx.stroke();
  }
}

