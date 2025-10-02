console.log("Hola mundo!");
console.log(THREE);
console.log(gsap);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#lienzo"),
});
renderer.setSize(window.innerWidth, window.innerHeight);


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(3, 3, 5);
scene.add(light);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x1e90ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();


document.getElementById("btn").addEventListener("click", () => {
  gsap.to(cube.rotation, {
    duration: 2,
    y: cube.rotation.y + Math.PI * 4, 
    ease: "power2.inOut",
  });
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

