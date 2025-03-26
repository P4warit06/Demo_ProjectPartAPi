<script setup>
import { useRoute, useRouter } from 'vue-router'
import { getItemById } from '../libs/fetchUtils'
import { ref } from 'vue'
const {
    params: { productId }
} = useRoute()
// const route = useRoute()
// const params = route.params
// const productId = params.productId
console.log(productId)

const selectProduct = ref({})
async function getProductById() {
    selectProduct.value = await getItemById(
        `${import.meta.env.VITE_APP_URL}/products`,
        productId
    )
}

getProductById()
// const router = useRouter()
// const goBack = () => {
//   router.go(-1)
// }
</script>

<template>
    <div class="p-5">
        <div class="p-16 shadow-2xl items-center max-w-lg">
            <p class="flex flex-col"></p>
            <p><span class="font-semibold">id: </span> {{ selectProduct.id }}</p>
            <p>
                <span class="font-semibold">name: </span>{{ selectProduct.productName }}
            </p>
            <p>
                <span class="font-semibold">price: </span> {{ selectProduct.price }}
            </p>
            <p>
                <span class="font-semibold">description: </span>{{ selectProduct.description }}
            </p>
            <p>
                <span class="font-semibold">instock: </span> {{ selectProduct.inStock }}
            </p>
            <button @click="$router.go(-1)" class="pt-5 underline text-purple-500 cursor-pointer">
                Back
            </button>
        </div>
    </div>
</template>
