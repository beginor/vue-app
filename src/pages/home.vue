<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

import { SvgIcon } from '../components';

onMounted(() => {
    console.info('Home mounted');
});

onBeforeUnmount(() => {
    console.info('Home Before Unmount')
});
</script>

<template>
  <div class="route-page">
    <h2>Home</h2>
    <svg-icon path="bi/application"></svg-icon>
  </div>
</template>
