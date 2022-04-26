<script lang="ts" setup>
</script>
<template>
  <a-layout-header class="app-header">
    <div class="app-logo"></div>
    <a-menu theme="dark" mode="horizontal" style="line-height: 64px;">
      <a-menu-item key="1">
        <router-link to="/home">Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/about">About</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        nav 3
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<style lang="scss">
@import './src/variables';

.app-header {

  /* background-color: var(--bs-white); */

  .app-logo {
    float: left;
    width: 166px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
}

#ant-row-rtl {
  .app-logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
}
</style>
