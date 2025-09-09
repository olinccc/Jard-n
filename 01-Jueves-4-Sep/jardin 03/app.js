console.log("Hola, mundo!");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fondo
ctx.fillStyle = "#f4e2d8";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Cara (elipse)
ctx.beginPath();
ctx.ellipse(400, 300, 120, 180, Math.PI / 16, 0, 2 * Math.PI);
ctx.fillStyle = "#ffe0b3";
ctx.fill();
ctx.lineWidth = 4;


// Ojo izquierdo (elipse)
ctx.beginPath();
ctx.ellipse(360, 290, 30, 18, Math.PI / 12, 0, 2 * Math.PI);
ctx.fillStyle = "#ffffff";
ctx.fill();


ctx.beginPath();
ctx.ellipse(360, 290, 15, 10, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#222";
ctx.fill();

// Ojo derecho (elipse, más pequeño y desplazado)
ctx.beginPath();
ctx.ellipse(449, 290, 30, 18, -Math.PI / 10, 0, 2 * Math.PI);
ctx.fillStyle = "#ffffff";
ctx.fill();


ctx.beginPath();
ctx.ellipse(450, 290, 15, 10, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#222";
ctx.fill();

// Nariz (triángulo)
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(420, 380);
ctx.lineTo(390, 380);
ctx.closePath();
ctx.fillStyle = "#e0a96d";
ctx.fill();


// Oreja izquierda (elipse)
ctx.beginPath();
ctx.ellipse(280, 320, 20, 40, Math.PI / 6, 0, 2 * Math.PI);
ctx.fillStyle = "#ffe0b3";
ctx.fill();

// Oreja derecha (elipse)
ctx.beginPath();
ctx.ellipse(520, 320, 18, 38, -Math.PI / 6, 0, 2 * Math.PI);
ctx.fillStyle = "#ffe0b3";
ctx.fill();


// Ceja izquierda (línea)
ctx.beginPath();
ctx.moveTo(340, 245);
ctx.lineTo(380, 255);
ctx.strokeStyle = "#222";
ctx.lineWidth = 5;
ctx.stroke();

// Ceja derecha (línea)
ctx.beginPath();
ctx.moveTo(425, 240);
ctx.lineTo(455, 250);
ctx.strokeStyle = "#222";
ctx.lineWidth = 4;
ctx.stroke();

// Cabello (triángulo grande)
ctx.beginPath();
ctx.moveTo(320, 140);
ctx.lineTo(480, 120);
ctx.lineTo(400, 220);
ctx.closePath();
ctx.fillStyle = "#2e1a47";
ctx.fill();


