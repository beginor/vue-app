<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  msg: { type: String, required: false, default: '' },
});

const title = ref<string>('Hello, Vue !');
let message;

onMounted(() => { message = props.msg });
</script>

<template>
    <div class="app-main">
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
        <p>{{ message }}</p>
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
