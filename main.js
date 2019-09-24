const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near Plane
  1000 // Far Plane
);

// Enable WebGL
const renderer = new THREE.WebGLRenderer();

// Set size to full screen
renderer.setSize(window.innerWidth, window.innerHeight);

// Insert into DOM
document.body.appendChild(renderer.domElement);

// Box dimensions and textures
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);

// Add box to scene
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
