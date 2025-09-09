console.log("Hola, mundo!");
console.log(THREE);
console.log(gsap);


const canvas = document.getElementById("lienzo");


var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;


const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 3; 
camera.position.y = 2; 

const geometry= new THREE.SphereGeometry();
const material= new THREE.MeshPhongMaterial({
   flatShading: true,
   specular: "#ffffff", 
   shininess: 100
});

const mesh = new THREE.Mesh(geometry, material);

mesh.position.z = -5;
mesh.rotation.x = Math.PI / 6; 

scene.add(mesh); 


mesh.position.x = -5;
mesh.position.y = 0;


let progress = { t: 0 };


gsap.to(progress, {
  t: 1,
  duration: 3,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});


function animate() {
   requestAnimationFrame(animate);

   
   mesh.position.x = -5 + 10 * progress.t;
  
   mesh.position.y = -15 * Math.pow(progress.t - 0.5, 2) + 5;

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();

const topLight = new THREE.PointLight("orange", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("red", 50, 50);
frontLight.position.set(3,1,3);

scene.add(frontLight);
