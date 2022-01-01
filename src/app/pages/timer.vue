<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const time = ref(new Date());

const count = ref(0);

let handle = 0;

onMounted(() => {
    handle = setInterval(() => {
        time.value = new Date();
        // console.log(time.value);
    }, 1000, undefined);
});

onBeforeUnmount(() => {
    clearInterval(handle);
});
</script>

<template>
  <div class="route-page">
    <h2>Timer</h2>
    <p>{{ time }}</p>
    <button type="button" @click="count++">
      Click Me.
    </button>
    <p>{{ count }}</p>
  </div>
</template>

<style scoped  lang="scss">
  .about-page {
      margin: 16px;
  }
</style>
