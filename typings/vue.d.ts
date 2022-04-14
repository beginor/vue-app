/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../node_modules/ant-design-vue/typings/global.d.ts" />

declare module '*.vue' {
    import { defineComponent } from 'vue';
    const component: ReturnType<typeof defineComponent>;
    export default component;
}

