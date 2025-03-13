<script setup>
// import products from '../../data/products.json' 
import ProductList from './ProductList.vue'
import AddProduct from './AddProducts.vue'
import { ref, onMounted } from 'vue'
import { deleteItemById, getItems, addItem } from '@/libs/fetchUtils.js'

const myProducts = ref([])
const isAdding = ref(false)

onMounted(async () => {
  try {
    myProducts.value = await getItems(`${import.meta.env.VITE_APP_URL}/products`);
    console.log(myProducts.value)
  } catch(error) {
    console.log(error)
  }
})

const removeProduct = async (removeId) => {
  console.log(removeId)
  try {
    const status = await deleteItemById(`${import.meta.env.VITE_APP_URL}/products, removeId`)
    if(status === 200) {
      const index = myProducts.value.findIndex(product => product.id === removeId)
      if (index !== -1) {
        myProducts.value.splice(index, 1)
      }
    }
  } catch(error) {
    console.log(error)
  }
}

const addProduct = async (product) => {
  isAdding.value = false
  try {
    const item = await addItem(`${import.meta.env.VITE_APP_URL}/products, product`)
    if(item) {
      console.log(item)
      myProducts.value.push(item) 
    }
  } catch(error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="p-2">
    <button
      @click="isAdding = !isAdding"
      class="text-green-600 hover:text-green-400 underline cursor-pointer"
    >
      Add New Product
    </button>
    <AddProduct v-show="isAdding" @add-new-product="addProduct" />
    <ProductList @deleteProduct="removeProduct" :products="myProducts" />
  </div>
</template>

<style scoped></style> 