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

<style scoped lang="css">

.app-main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
