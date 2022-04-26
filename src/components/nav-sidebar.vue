<script lang="ts" setup>
</script>
<template>
  <a-layout-sider class="app-sidebar" theme="light" width="240"
    :collapsible="true" ref="siderRef">
    <a-menu class="app-sidebar-menu" mode="inline">
      <a-sub-menu key="sub1" title="subnav 1">
        <template #icon>
          <span role="img" class="anticon">*</span>
        </template>
        <a-sub-menu key="sub1-1" title="subnav 1.1">
          <template #icon>
            <span role="img" class="anticon">*</span>
          </template>
          <a-menu-item key="1.1">option1</a-menu-item>
          <a-menu-item key="1.2">option2</a-menu-item>
          <a-menu-item key="1.3">option3</a-menu-item>
          <a-menu-item key="1.4">option4</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="1">option1</a-menu-item>
        <a-menu-item key="2">option2</a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
        <a-menu-item key="4">option4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2" title="subnav 2">
        <template #icon>
          <span role="img" class="anticon">*</span>
        </template>
        <a-menu-item key="5">option5</a-menu-item>
        <a-menu-item key="6">option6</a-menu-item>
        <a-menu-item key="7">option7</a-menu-item>
        <a-menu-item key="8">option8</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9" title="help">
        <template #icon>
          <span role="img" class="anticon">*</span>
        </template>
        help
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<style lang="scss">
.app-sidebar {
    background-color: var(--bs-white);

    .app-sidebar-menu {
        height: 100%;
    }
}
</style>
