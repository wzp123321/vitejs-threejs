declare namespace IThreeConstructor {
  export interface ThreeInfo {
    container?: HTMLElement | string;
    camera?: GlobalModule.CommonObject;
    scene?: GlobalModule.CommonObject;
    renderer?: GlobalModule.CommonObject;
    init: () => void;
  }
}

declare namespace GlobalModule {
  export interface CommonObject {
    [key: string]: any;
  }
}
