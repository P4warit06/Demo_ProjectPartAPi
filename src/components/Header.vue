<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
onBeforeMount(() => {
  console.log('[Header.vue], onBeforeMount')
})
onMounted(() => {
  console.log('[Header.vue], onMounted')
})
onBeforeUnmount(() => {
  console.log('[Header.vue], onUnMount')
})
onUnmounted(() => {
  console.log('[Header.vue], onUnmounted')
})
</script>

<template>
  <div>
    <h1 class="text-4xl text-blue-700 tracking-wider">Header Title</h1>
  </div>
</template>

<style scoped></style>