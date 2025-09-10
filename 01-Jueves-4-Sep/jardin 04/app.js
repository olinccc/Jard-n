console.log("Hola, mundo!");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.fillStyle = "#ffffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
      ctx.lineWidth = 1 + Math.random() * 2;
      ctx.stroke();
    }



