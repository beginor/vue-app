<template>
  <p>{{time}}</p>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

let time = ref(new Date());

let handle = 0;

onMounted(() => {
    handle = setInterval(() => {
        time.value = new Date();
        console.log(time);
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(handle);
});
</script>
