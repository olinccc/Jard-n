console.log("Hola mundo");
gsap.registerPlugin(MotionPathPlugin);

// escenario y pelota
const stage = document.createElement("div");
stage.id = "stage";
document.body.appendChild(stage);

const pelota = document.createElement("div");
pelota.className = "pelota";
stage.appendChild(pelota);

// posición inicial
const start = { x: 80, y: window.innerHeight - 120 };
gsap.set(pelota, { x: start.x, y: start.y });

// trayectorias
function makePaths() {
  const x0 = start.x;
  const y0 = start.y;
  const xEnd = window.innerWidth - 120;
  const yEnd = window.innerHeight / 3;

  const out = [
    { x: x0, y: y0 },
    { x: (x0 + xEnd) / 2, y: y0 - 200 },
    { x: xEnd, y: yEnd }
  ];

  const back = [
    { x: xEnd, y: yEnd },
    { x: (x0 + xEnd) / 2, y: y0 - 80 },
    { x: x0, y: y0 }
  ];

  return { out, back };
}

// animación al click
stage.addEventListener("click", () => {
  const { out, back } = makePaths();

  const tl = gsap.timeline();
  tl.to(pelota, {
    duration: 1,
    motionPath: { path: out, curviness: 1.5 }
  });
  tl.to({}, { duration: 0.1 }); // pequeña pausa
  tl.to(pelota, {
    duration: 1,
    motionPath: { path: back, curviness: 1.5 }
  });
});