// 引入three
import * as THREE from "three";
import { RGBELoader, Ax } from "three";
// 常量
import THREE_CONSTANT from "./constant";

class ThreeConstructor implements IThreeConstructor.ThreeInfo {
  container;
  camera: any;
  scene: any;
  renderer: any;
  // 构造函数
  constructor(selector: string) {
    // 容器
    this.container = document.querySelector(selector) as HTMLElement;
    // 摄像头
    this.camera;
    // 场景
    this.scene = {};
    // 渲染
    this.renderer = {};
    // 初始化
    this.init();
  }
  //   chushihua
  init = () => {
    this.initScene();

    this.initCamera();

    // 初始化渲染器
    this.initRenderer();
  };
  // 初始化场景
  initScene = () => {
    this.scene = new THREE.Scene();

    this.setEnvironment("000");
  };
  //   初始化摄像头
  initCamera = () => {
    //   角度
    this.camera = new THREE.PerspectiveCamera(
      THREE_CONSTANT.CAMERA_ANGLE,
      window.innerWidth / window.innerHeight,
      THREE_CONSTANT.NEAREST_LEN,
      THREE_CONSTANT.FARTHEST_LEN
    );
    // 设置坐标
    this.camera.position.set(-1.8, 0.6, 2.7);
  };
  //   初始化渲染器
  initRenderer = () => {
    //   antialias == 抗锯齿
    this.renderer = new THREE.WebGL1Renderer({ antialias: true });
    // 设置像素比
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // 设置渲染尺寸
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // 挂载dom
    this.container.append(this.renderer.domElement);
  };
  //   设置背景
  setEnvironment = (hdr: string) => {
    new RGBELoader()
      .setPath("./hdrs/")
      .load(`${hdr}.hdr`, (texture: any) => {
        this.scene.background = texture;
        this.scene.environment = texture;
      });
  };
  //   渲染
  render = () => {
    this.renderer.render(this.scene, this.camera);
  };
  //   动画
  animation = () => {
    this.renderer.setAnimationLoop(this.render.bind(this));
  };
}

export default ThreeConstructor;
