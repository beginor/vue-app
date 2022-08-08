<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NavTopbar, NavSidebar } from './components';

const props = defineProps({
    msg: { type: String, required: false, default: '' },
});

const title = ref<string>('Hello, Vue !');
let message;

onMounted(() => { message = props.msg });
</script>

<template>
  <a-layout>
    <nav-topbar></nav-topbar>
  </a-layout>
  <a-layout class="app-main">
    <nav-sidebar></nav-sidebar>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
  <!-- <div class="app-main">
    <router-view />
  </div> -->
</template>

<style lang="css">
.app-main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
