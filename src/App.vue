<script setup>

//onCreated
//local registration
import Header from "./components/Header.vue";
import GroupList from "./components/GroupList.vue";
import ProductList from "./components/ProductList.vue";
import ProductManager from "./components/ProductManager.vue";
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
</template>


