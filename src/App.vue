<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { DatePicker, LocaleProvider } from "ant-design-vue";
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
    LocaleProvider,
  },
});
</script>

<template>
  <LocaleProvider :locale="locale">
    <router-view></router-view>
  </LocaleProvider>
</template>
