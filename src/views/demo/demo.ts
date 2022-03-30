import { defineComponent, computed, onMounted, ref } from "vue";
// plugins
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  Vector3,
  Line,
  FontLoader,
  Color,
  TextGeometry,
} from "three";
import { AxesHelper } from "three";
import { PlaneGeometry } from "three";

export default defineComponent({
  name: "Demo",
  setup() {
    const threeContainerId = computed(() => {
      return `chart_container_${(Math.random() * 100000).toFixed(0)}`;
    });
    // 场景
    const renderer = ref();
    /**
     * 初始化
     */
    const initThree = () => {
      // 初始化场景
      const scene = new Scene("white");
      // 初始化摄像头
      const camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      //   camera.ratation.x = 0.5 * Math.PI
      camera.position.x = -40;
      camera.position.y = 30;
      camera.position.z = 20;
      camera.lookAt(scene.position);
      //   初始化渲染器
      const renderer = new WebGLRenderer();
      //   设置背景色
      renderer.setClearColor(new Color("#fff"));
      //   设置尺寸
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (document.getElementById(threeContainerId.value)) {
        const container = document.getElementById(
          threeContainerId.value
        ) as HTMLElement;
        container.appendChild(renderer.domElement);
      }

      //   方块
      var geometry = new BoxGeometry(10, 10, 10);
      var material = new MeshBasicMaterial({
        color: 0xff00000,
        wireframe: true,
      });
      var cube = new Mesh(geometry, material);
      cube.position.x = 5;
      cube.position.y = 6;
      cube.position.z = 5;
      scene.add(cube);

      //   坐标系
      const axes = new AxesHelper(20);
      scene.add(axes);

      const planeGeometry = new PlaneGeometry(60, 30);
      const planeMaterial = new MeshBasicMaterial({ color: 0xcccccc });
      //   网格
      const plane = new Mesh(planeGeometry, planeMaterial);
      scene.add(plane);
      plane.rotation.x = -0.5 * Math.PI;
      //   plane.position.x = 30;
      //   plane.position.y = 0;
      //   plane.position.z = 15;

      //   camera.position.z = 5;
      // 动画
      //   var animate = function () {
      //     requestAnimationFrame(animate);

      //     cube.rotation.x += 0.01;
      //     cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      //   };

      //   animate();
    };
    /**
     * 初始化
     */
    onMounted(() => {
      initThree();

      window.onresize = () => {
        if (renderer.value) {
          renderer.value.reSize();
        }
      };
    });

    return {
      threeContainerId,
    };
  },
});
