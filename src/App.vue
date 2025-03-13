<script setup>
//onCreated
//local registration
import Header from "./components/Header.vue";
import GroupList from "./components/GroupList.vue";
import ProductList from "./components/ProductList.vue";
import ProductManager from "./components/ProductManager.vue";
import { ref } from 'vue'
import ReadCount from "./components/ReadCount.vue";
const count = ref(1)
console.log(import.meta.env.VITE_APP_URL)
console.log(import.meta.env.DB_PASSWORD)
</script>
<template>
  <div>
    <Header>
      <template #logo></template>
      <template #Maintitle> Header JA</template>
      <template #Subtitle> Sub Title</template>
    </Header>
    <!-- <GroupList> </GroupList> -->
    <!-- <ProductList> </ProductList> -->
    <ProductManager></ProductManager>
  </div>

  <div class="flex justify-center items-center space-x-3 m-10 p-20 shadow-lg">
    <button @click="count--" class="border border-red-600 rounded-lg px-2 py-1">
      -
    </button>
    <p>
      Counter: <span>{{ count }}</span>
    </p>
    <button @click="count++" class="border border-green-600 rounded-lg px-2 py-1">
      +
    </button>
  </div>
</template>
