console.log("Hola, mundo!");
console.log(THREE);


const canvas = document.getElementById("lienzo");


var width = window.innerWidth;
var height = window.innerHeight;


canvas.width = width;
canvas.height = height;


const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const geometry = new THREE.SphereGeometry(0.5, 32, 32); 
const material = new THREE.MeshPhongMaterial({
   flatShading: true,
   specular: "#ffffff", 
   shininess: 100
});


const spheres = [];
const positions = [
    [0, 0, -5],      // centro
    [-0.5, 0, -5],   // izquierda
    [0.5, 0, -5],    // derecha
    [0, 0.5, -5],    // arriba
    [0, -0.5, -5]    // abajo
];
for (let i = 0; i < positions.length; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(positions[i][0], positions[i][1], positions[i][2]);
    scene.add(mesh);
    spheres.push(mesh);
}


const geometryc = new THREE.CylinderGeometry(0.15, 0.15, 1, 32); 
const materialc = new THREE.MeshBasicMaterial({ color: "brown" });
const cylinder = new THREE.Mesh(geometryc, materialc);
cylinder.position.set(0, -1.5, -5); 
scene.add(cylinder);


renderer.render(scene, camera);

function animate() {
   requestAnimationFrame(animate);

  //mesh.rotation.x += 0.01;
  //mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();

const topLight = new THREE.PointLight("green", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("green", 100, 100);
frontLight.position.set(3,1,3);

scene.add(frontLight);


camera.position.z = 5;
const initialZ = camera.position.z;

// Botones
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");


zoomInBtn.addEventListener("click", () => {
  gsap.to(camera.position, { 
    z: 2, 
    duration: 1, 
    ease: "power2.inOut" 
  });
});

zoomOutBtn.addEventListener("click", () => {
  gsap.to(camera.position, { 
    z: initialZ, 
    duration: 1, 
    ease: "power2.inOut" 
  });
});
