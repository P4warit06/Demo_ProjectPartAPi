<script setup>
// import products from '../../data/products.json'
import ProductList from './ProductList.vue'
import AddEditProduct from './AddEditProduct.vue'
import { ref, onMounted } from 'vue'
import {
  getItems,
  deleteItemById,
  addItem,
  editItem
} from '../libs/fetchUtils.js'
const myProducts = ref([])
//get product
onMounted(async () => {
  try {
    myProducts.value = await getItems(
      `${import.meta.env.VITE_APP_URL}/products`
    )
    console.log(myProducts.value)
  } catch (error) {
    console.log(error)
  }
})
//add product
const addProduct = async (product) => {
  //fetch() - POST
  try {
    const addedItem = await addItem(
      `${import.meta.env.VITE_APP_URL}/products`,
      product
    )
    //validate new product
    if (addItem) {
      myProducts.value.push(addedItem)
    }
  } catch (error) {
    console.loc(error)
  }

  isAdding.value = false
}
const isAdding = ref(false)
//edit product
const isEditing = ref(false)
const currentProduct = ref({ name: '', price: 0 })
const setEditProduct = (product) => {
  isEditing.value = true
  console.log(product)
  currentProduct.value = { ...product }
}
const updateProduct = async (product) => {
  //validate
  //call backend
  try {
    const editedItem = await editItem(
      `${import.meta.env.VITE_APP_URL}/products`,
      product.id,
      product
    )
    //update frontend state
    const editedIndex = myProducts.value.findIndex(
      (item) => item.id === editedItem.id
    )
    myProducts.value.splice(editedIndex, 1, editedItem)
  } catch (error) {
    console.log(error)
  }
  isEditing.value = false
  currentProduct.value = { name: '', price: 0 }
}
//remove product
const removeProduct = async (removeId) => {
  console.log(removeId)
  try {
    const status = await deleteItemById(
      `${import.meta.env.VITE_APP_URL}/products`,
      removeId
    )
    if (status === 200) {
      //update myProducts state
      const removeIndex = myProducts.value.findIndex(
        (item) => item.id === removeId
      )
      myProducts.value.splice(removeIndex, 1)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="p-2">
    <!-- 3. call handler fuction -->
    <button @click="isAdding = !isAdding" class="text-green-600 hover:text-green-400 underline cursor-pointer">
      Add New Product
    </button>
    <AddEditProduct v-if="isAdding | isEditing" @add-new-product="addProduct" :active-product="currentProduct"
      @edit-product="updateProduct" />
    <ProductList v-show="!isAdding && !isEditing" @deleteProduct="removeProduct" @setEditing="setEditProduct"
      :products="myProducts" />
  </div>
</template>

<style scoped></style>
