<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

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
  </div>
</template>
