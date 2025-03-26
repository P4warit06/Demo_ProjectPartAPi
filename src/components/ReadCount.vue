<!-- child component -->

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  counter: Number
})
console.log(props.counter)

// 1. ref to initial count value from parent component and disconnect
const localCounter = ref(props.counter)
localCounter.value++
// 2. computed to initial count value and automatically change with parent value
const computedCounter = computed(() => props.counter * 2)
</script>

<template>
  <div>
    <p>[ReadCount.vue], props.counter: {{ counter }}</p>
    <p>[ReadCount.vue], localCounter: {{ localCounter }}</p>
    <p>[ReadCount.vue], computedCounter: {{ computedCounter }}</p>
  </div>
</template>

<style scoped></style>
