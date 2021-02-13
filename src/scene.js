import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as dat from "dat.gui"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//GUI Debug
const gui = new dat.GUI({closed:true})
gui.hide()

// Cámara
const fov = 75
const aspect = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera( fov, aspect, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;

// Material
const material = new THREE.MeshBasicMaterial( 
  {
    color: 0x222222, 
    side: THREE.DoubleSide,
    wireframe: true
  }
);

// Lights
const light = new THREE.DirectionalLight( 0xff0000);
light.position.set(-1,3,2)

// Escena
const scene = new THREE.Scene();
scene.add(light);
scene.background = new THREE.Color("dimgrey");

const loader = new GLTFLoader();
loader.load( 
  '/models/model-1.glb', 
  ( gltf ) => {
    gltf.scene.traverse( node => 
      { if (node.isMesh) { 
        node.material = material; 
      } }
    );
	scene.add( gltf.scene )
})
// camera.lookAt(scene.position)

//Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//GUI Debug
// gui.add(plano.position, "x").min(-3).max(3).step(0.01).name("Posicion X")
// gui.add(plano, "visible")

export let t = "";
t = performance.now();
console.log("tiempo "+t)

const animate = () => {
  requestAnimationFrame(animate);
  // plano.rotation.x += 0.001;
  // modelo1.rotation.x *= 0.001
  renderer.render(scene, camera);
};

// Renderer
let renderer;

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer(
    { 
      antialias: true, 
      canvas: el
    }
    );
  const controls = new OrbitControls(camera,el)
  // controls.enableDamping = true
  // controls.update()
  resize();
  animate();
};

window.addEventListener("resize", resize);
