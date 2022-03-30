<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { DatePicker, ConfigProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
const locale = zhCN;

defineExpose({
  locale,
});
defineComponent({
  components: {
    DatePicker,
    ConfigProvider,
  },
});
</script>

<template>
  <ConfigProvider :locale="locale">
    <router-view></router-view>
  </ConfigProvider>
</template>
<style lang="less" scoped>
#app {
  height: 100%;
}
</style>
