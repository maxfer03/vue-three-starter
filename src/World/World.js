import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createCube } from "./components/objects/cube.js";
import { createScene } from "./components/scene.js";
import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    // Instances of camera, scene, and renderer
    camera = createCamera();
    scene = createScene('hsl(210, 29%, 35%)');
    renderer = createRenderer();


    // Initializate Loop
    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    // Orbit Controls
    const controls = createControls(camera, renderer.domElement);
  
    // Cube Instance
    let box = createCube('#41b883')

    // Light Instance, with optional light helper
    const { light, lightHelper } = createLights('white');

    loop.updatables.push(controls);
    loop.updatables.push(box);
    loop.updatables.push(light);


    scene.add(light, box );

    // Responsive handler
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  // Animation handlers
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
