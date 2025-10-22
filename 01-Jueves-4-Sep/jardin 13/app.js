
const canvas = document.getElementById("lienzo");

// Crear escena, cámara y render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// sombras 
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// luz ambiental y direccional 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(3, 5, 2);
directionalLight.castShadow = true; // activar sombras
scene.add(directionalLight);

// añadir luz hemisférica para relleno suave
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.35);
scene.add(hemiLight);

// geometría y material
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 

// copiar UVs para maps como aoMap (si las usas)
if (geometry.attributes.uv) {
  geometry.setAttribute('uv2', geometry.attributes.uv);
}

// propiedades
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  roughness: 0.35,   
  metalness: 0.05,   
  flatShading: false
});

const torus = new THREE.Mesh( geometry, material );
torus.castShadow = true;
torus.receiveShadow = false;
scene.add( torus );

// Posicionar la cámara
camera.position.z = 30;

// Variables para animación
let clock = new THREE.Clock();
let rotating = false; // botón

// Animación
function animate() {
  requestAnimationFrame(animate);

  // levitación 
  const t = clock.getElapsedTime();
  torus.position.y = Math.sin(t) * 0.5; 

  
  if (rotating) {
    torus.rotation.y += 0.02;
  }

  renderer.render(scene, camera);
}
animate();


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
