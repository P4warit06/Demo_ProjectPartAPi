<script setup>
import groups from "../../data/groups.json";
</script>

<template>
  <div>
    <ListModel :items="groups" listType="card">
      <template #heading> <p>### GROUP LIST ###</p> </template>
      <template v-slot:listItems="{ yourItem }">
        <p>
          <span class="italic text-red-700">id:</span>{{ yourItem.ID }}
          <span class="italic text-indigo-850">group name:</span>{{ yourItem.groupName }}
        </p>
      </template>
    </ListModel>
  </div>
</template>

<style scoped></style>