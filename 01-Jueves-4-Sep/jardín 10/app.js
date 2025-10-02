console.log("Hola mundo!");
console.log(THREE);

const canvas = document.getElementById("lienzo");

var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5; 


const copaMaterial = new THREE.MeshPhongMaterial({
    flatShading: true,
    specular: "#ffffff",
    shininess: 100,
    color: "green"
});


const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const spheres = [];
const positions = [
    [0, 0, 0],
    [-0.5, 0, 0],
    [0.5, 0, 0],
    [0, 0.5, 0],
    [0, -0.5, 0]
];
for (let i = 0; i < positions.length; i++) {
    const mesh = new THREE.Mesh(geometry, copaMaterial);
    mesh.position.set(...positions[i]);
    scene.add(mesh);
    spheres.push(mesh);
}


const troncoGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1, 32);
const troncoMaterial = new THREE.MeshBasicMaterial({ color: "brown" });
const tronco = new THREE.Mesh(troncoGeometry, troncoMaterial);
tronco.position.set(0, -1.5, 0);
scene.add(tronco);


const topLight = new THREE.PointLight("white", 100, 100);
topLight.position.set(0, 5, 5);
scene.add(topLight);

const frontLight = new THREE.PointLight("white", 100, 100);
frontLight.position.set(3, 1, 3);
scene.add(frontLight);


const boton = document.getElementById("cambiarColor");
if (boton) {
    boton.addEventListener("click", () => {
        console.log("Botón clickeado");
       
        const nuevoColor = new THREE.Color(Math.random(), Math.random(), Math.random());
        copaMaterial.color = nuevoColor;

        copaMaterial.needsUpdate = true;

        renderer.render(scene, camera);
    });
} else {
    console.warn("Botón no encontrado en el DOM");
}

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

