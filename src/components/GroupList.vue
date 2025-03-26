<script setup>
import groups from '../../data/groups.json'
import ListModel from './model/ListModel.vue'
</script>

<template>
  <div>
    <ListModel :items="groups">
      <template #heading>
        <p>###Group List###</p>
      </template>
      <template v-slot:listItems="{ yourItem }">
        <p>
          <span class="italic">id: </span>{{ yourItem.ID }},
          <span class="italic">group name:</span>{{ yourItem.groupName }}
        </p>
      </template>
    </ListModel>
  </div>
</template>

<style scoped></style>
