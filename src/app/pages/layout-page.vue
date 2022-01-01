<script setup lang="ts">
</script>
<template>
  <div class="route-page">
    <transition>
      <div class="left-workspace bg-warning">Left</div>
    </transition>
    <transition>
      <div class="right-workspace bg-info">Right</div>
    </transition>
    <transition>
      <div class="bottom-workspace bg-danger">bottom</div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
.left-workspace {
  position: absolute;
  left: 0px;
  top: 56px;
  width: 240px;
  height: 100%;
}

.right-workspace {
    position: absolute;
    right: 0;
    top: 56px;
    width: 240px;
    height: 100%;
}

.bottom-workspace {
    position: absolute;
    bottom: 0;
    height: 200px;
    left: 244px;
    right: 244px;
}
</style>
