<script setup></script>

<template>
  <div class="p-5">
    <router-link active-class="text-yellow-500" to="/login">Login |
    </router-link>
    <router-link active-class="text-yellow-500" to="/product-manager">Product Management |
    </router-link>
    <router-link active-class="text-yellow-500" :to="{ name: 'AboutUs' }">AboutUs
    </router-link>
    <!-- <h1>After this tag, it will render component</h1> -->
    <router-view />
  </div>
</template>

<style scoped></style>
``