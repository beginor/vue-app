<script lang="ts" setup>
import { onMounted, ref  } from 'vue';

const props = defineProps({
    path: { type: String, required: true, default: 'bi/app' }
});

const iconRef = ref();

onMounted(() => {
    console.log(iconRef.value, 'onMounted');
});
</script>
<template>
  <i ref="iconRef">svg icon works!</i>
</template>
