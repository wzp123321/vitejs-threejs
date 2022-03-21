<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { DatePicker, LocaleProvider } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
const locale = zhCN;
const value1 = ref();

defineExpose({
  locale,
  value1,
});
defineComponent({
  components: {
    DatePicker,
    LocaleProvider
  },
});
</script>

<template>
  <LocaleProvider :locale="locale">
    <DatePicker v-model:value="value1" />
    <router-view></router-view>
  </LocaleProvider>
</template>
