<template>
  <nav-bar />
  <div class="app-main">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
@import './src/variables';

.app-main {
  @include full-width-height();
  @include no-margin-padding();
  overflow: hidden;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import NavBar from './controls/nav-bar.vue';

const props = defineProps({
    msg: { type: String, required: false, default: '' },
});

const title = ref('Hello, Vue !');
let message;

onMounted(() => { message = props.msg });
</script>
