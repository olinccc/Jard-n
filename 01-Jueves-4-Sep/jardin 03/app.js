console.log("Hola, mundo!");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.strokeStyle = "#66ff00";
ctx.ellipse= (200, 200, 150, 100, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();


function dibujarCirculo(x,y){
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.ellipse(x, y, 50, 50, 0, 0, 2 * Math.PI);   
    ctx.stroke();
}
