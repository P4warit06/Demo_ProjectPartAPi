<!-- child component -->
<script setup>
const props = defineProps({
  counter: Number
})
console.log(props.counter)
</script>

<template>
  <div>
    <p>[ReadCount.vue], props.counter: {{ counter }}</p>
  </div>
</template>

<style scoped></style>