let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Plane
    1000 // Far Plane
  );

  // Enable WebGL, antialiasing
  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set size to full screen
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Insert into DOM
  document.body.appendChild(renderer.domElement);

  // Box dimensions and textures
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  const texture = new THREE.TextureLoader().load('textures/crate.gif');
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);

  // Add box to scene
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
