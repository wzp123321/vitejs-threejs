import { defineComponent, reactive, onMounted } from "vue";

import ThreeConstructor from "../../controller/use-three-controller";

export default defineComponent({
  name: "ThreeCharts",
  setup() {
    const threeState = reactive({
      threeInfo: {},
    });
    onMounted(() => {
      threeState.threeInfo = new ThreeConstructor("#three-chart");
    });
  },
});
