<script setup>
import groups from '../../data/groups.json'
import ListModel from './model/Listmodel.vue'
</script>
<template>
    <div class="p-6 bg-gray-100 rounded-xl shadow-md">
        <ListModel :items="groups">
            <template #heading>
                <p class="font-mono"> #Groups List #</p>
            </template>
            <template v-slot:listItems="{ yourItem }">
                <p>
                    <span class="italic text-red-700"> ID : </span> {{ yourItem.ID }} , 
                    <span class="italic text-indigo-950"> GroupName : </span> {{ yourItem.groupName }}
                </p>
            </template>
        </ListModel>
    </div>
</template>

<style scoped></style>