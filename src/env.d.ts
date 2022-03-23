/// <reference types="vite/client" />
/// <reference path="./types/three.d.ts"/>

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'ant-design-vue/lib/locale-provider/zh_CN';


declare module 'three';