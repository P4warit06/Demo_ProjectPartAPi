<script setup>
import products from '../../data/products.json'
import ProductList from './ProductList.vue'
</script>

<template>
  <div>
    <ProductList :products="products" />
  </div>
</template>

<style scoped></style>