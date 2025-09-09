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
ctx.ellipse(340, 290, 30, 18, Math.PI / 12, 0, 2 * Math.PI);
ctx.fillStyle = "#ffffff";
ctx.fill();


ctx.beginPath();
ctx.ellipse(340, 290, 15, 10, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#222";
ctx.fill();

// Ojo derecho (elipse, más pequeño y desplazado)
ctx.beginPath();
ctx.ellipse(459, 290, 30, 18, -Math.PI / 10, 0, 2 * Math.PI);
ctx.fillStyle = "#ffffff";
ctx.fill();


ctx.beginPath();
ctx.ellipse(459, 290, 15, 10, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#222";
ctx.fill();

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(425, 385);
ctx.lineTo(390, 385);
ctx.closePath();
ctx.fillStyle = "#ffffffff";
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
ctx.moveTo(325, 255);
ctx.lineTo(390, 265);
ctx.strokeStyle = "#222";
ctx.lineWidth = 3;
ctx.stroke();

// Ceja derecha (línea)
ctx.beginPath();
ctx.moveTo(425, 270);
ctx.lineTo(490, 250);
ctx.strokeStyle = "#222";
ctx.lineWidth = 3;
ctx.stroke();

// Cabello de mujer (forma básica con curvas y elipses)

// Lado izquierdo del cabello
ctx.beginPath();
ctx.moveTo(270, 180);
ctx.bezierCurveTo(180, 250, 220, 500, 370, 520);
ctx.bezierCurveTo(320, 400, 260, 320, 320, 200);
ctx.closePath();
ctx.fillStyle = "#000000ff";
ctx.fill();

// Lado derecho del cabello
ctx.beginPath();
ctx.moveTo(530, 180);
ctx.bezierCurveTo(620, 250, 580, 500, 430, 520);
ctx.bezierCurveTo(480, 400, 540, 320, 480, 200);
ctx.closePath();
ctx.fillStyle = "#000000ff";
ctx.fill();

// Flequillo (frente)
ctx.beginPath();
ctx.moveTo(320, 150);
ctx.bezierCurveTo(380, 50, 500, 120, 600, 260);
ctx.bezierCurveTo(330, 250, 210, 190, 270, 180);
ctx.closePath();
ctx.fillStyle = "#000000ff";
ctx.fill();




