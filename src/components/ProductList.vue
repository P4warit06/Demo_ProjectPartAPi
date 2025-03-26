<script setup>
import ListModel from './model/ListModel.vue'
defineEmits(['deleteProduct', 'setEditing'])
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
console.log(props.products)
</script>

<template>
  <div>
    <ListModel :items="products" listType="card">
      <template #heading> ---Product List--- </template>
      <template #listItems="{ yourItem }">
        <button @click="$emit('setEditing', yourItem)" class="text-purple-600 hover:text-purple-400 cursor-pointer">
          Edit |
        </button>
        <button @click="$emit('deleteProduct', yourItem.id)" class="text-red-600 hover:text-red-400 cursor-pointer">
          Delete
        </button>
        <p>
          <span class="italic">id: </span>
          <router-link :to="{ name: 'ProductDetail', params: { productId: yourItem.id } }" class="underline">{{
            yourItem.id }}</router-link>, <span class="italic">product name:</span>{{ yourItem.productName }} <span
            class="italic">price:</span>{{ yourItem.price }}
        </p>
      </template>
    </ListModel>
  </div>
</template>

<style scoped></style>
