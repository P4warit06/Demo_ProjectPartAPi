<script setup>
import ListModel from './model/Listmodel.vue'
const props = defineProps({
  products: {
    type: Array,
    require: true
  }
})
console.log(props.products)
</script>

<template>
  <div>
    <ListModel :items="products" list-type="card">
      <template #heading> ---Product List--- </template>
      <template #listItems="{ yourItem }">
        <p>
          <span class="text-red-700">Product Id: </span> {{ yourItem.productId }} ,
          <span class="text-indigo-700">Product Name:</span> {{ yourItem.productName }}
        </p>
      </template>
    </ListModel>
  </div>
</template>

<style scoped></style>