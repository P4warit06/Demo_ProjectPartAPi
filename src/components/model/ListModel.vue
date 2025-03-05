<script setup>
const props = defineProps({
  items: {
    type: Array,
    require: true
  }
})
console.log(props.items)
</script>

<template>
  <div class="p-2">
    <div class="text-xl">
        <slot name="heading"> ##Enter your list Heading##</slot>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <slot name="listItems" :yourItem="item"></slot>
        <!-- {{ item }} -->
      </li>
    </ul>
  </div>
</template>

<style scoped></style>