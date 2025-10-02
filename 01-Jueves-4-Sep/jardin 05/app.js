console.log("Hola, mundo 3D!");

// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // fondo blanco

// Cámara
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 400;

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear 100 líneas aleatorias
for (let i = 0; i < 100; i++) {
  const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 70%)`);

  const material = new THREE.LineBasicMaterial({ color });

  const points = [
    new THREE.Vector3(
      (Math.random() - 0.5) * 600,
      (Math.random() - 0.5) * 600,
      (Math.random() - 0.5) * 600
    ),
    new THREE.Vector3(
      (Math.random() - 0.5) * 600,
      (Math.random() - 0.5) * 600,
      (Math.random() - 0.5) * 600
    )
  ];

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
}

// Redimensionar
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animación (opcional: rotar la escena para dar dinamismo)
function animate() {
  requestAnimationFrame(animate);

  // Rotación leve
  scene.rotation.y += 0.0015;
  scene.rotation.x += 0.0008;

  renderer.render(scene, camera);
}

animate();

