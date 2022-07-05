import * as THREE from 'three';
import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';


let scene;
let camera;
let renderer;
let house;
let model_container = document.querySelector('.web-gl')


const init = ()=>{
    scene = new THREE.Scene();

    const fov = 40;
    const aspect = Window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
    camera.position.set(0, 0, 25);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: model_container
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio((window.devicePixelRatio) ? window,devicePixelRatio : 1);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);



    const loader = new GLTFLoader();
    loader.load('./model/scene.gltf', (gltf)=>{

        house = gltf.scene.children[0];
        scene.add(gltf.scene);

    });



    renderer.render(scene, camera);
}

window.onload = init;