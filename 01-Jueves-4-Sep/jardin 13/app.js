// Seleccionar el canvas
const canvas = document.querySelector("#lienzo");

// Crear escena, cámara y render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// activar sombras para más profundidad
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Crear una luz ambiental y una direccional para iluminar la geometría
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(3, 5, 2);
directionalLight.castShadow = true; // permitir sombras desde la direccional
scene.add(directionalLight);

// añadir luz hemisférica para relleno suave
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.35);
scene.add(hemiLight);

// Crear geometría y material
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 

// copiar UVs para maps como aoMap (si las usas)
if (geometry.attributes.uv) {
  geometry.setAttribute('uv2', geometry.attributes.uv);
}

// material más mate con profundidad (ajustado: menos roughness para más brillo)
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  roughness: 0.35,   // reducido desde 0.85 => más brillo
  metalness: 0.05,   // pequeño metalness para reflejos sutiles
  flatShading: false
});

const torus = new THREE.Mesh( geometry, material );
torus.castShadow = true;
torus.receiveShadow = false;
scene.add( torus );

// cargar mapas opcionales desde ./material/
// coloca tus archivos normal.jpg / roughness.jpg / ao.jpg en la carpeta material
const loader = new THREE.TextureLoader();
loader.load('./material/normal.jpg',
  (tex) => {
    material.normalMap = tex;
    material.normalScale = new THREE.Vector2(1, 1); // fuerza de la normal map
    material.needsUpdate = true;
  },
  undefined, () => {}
);
loader.load('./material/roughness.jpg',
  (tex) => {
    material.roughnessMap = tex;
    material.roughness = 0.35; // mantener el valor global como multiplicador
    material.needsUpdate = true;
  },
  undefined, () => {}
);
loader.load('./material/ao.jpg',
  (tex) => {
    material.aoMap = tex;
    material.aoMapIntensity = 1.2; // acentúa sombras de oclusión ambiental
    material.needsUpdate = true;
  },
  undefined, () => {}
);

// Posicionar la cámara
camera.position.z = 30;

// Variables para animación
let clock = new THREE.Clock();
let rotating = false; // control de rotación con el botón

// Animación
function animate() {
  requestAnimationFrame(animate);

  // Movimiento de levitación con Math.sin()
  const t = clock.getElapsedTime();
  torus.position.y = Math.sin(t) * 0.5; // amplitud 0.5

  // Si está activada la rotación
  if (rotating) {
    torus.rotation.y += 0.02;
  }

  renderer.render(scene, camera);
}
animate();

// Evento del botón
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  rotating = !rotating;
  btn.textContent = rotating ? "detener" : "girar";
});

// Ajuste de ventana
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
