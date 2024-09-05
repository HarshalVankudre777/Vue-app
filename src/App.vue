<script setup>
import ToggleSwitch from 'primevue/toggleswitch';
import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";
import {ref} from "vue";

const checked = ref(false)

function toggleDarkMode() {
  const element = document.querySelector('html');
  element.classList.toggle('my-app-dark');
}

</script>

<template>
  <div class="toggle-container">
    <ToggleSwitch v-model="checked" @click="toggleDarkMode"/>
    <span class="dark-mode-text">Dark Mode</span>
  </div>
  <div class="content">
    <h1>Expense Tracker</h1>
    <Form/>
    <Table/>
  </div>
</template>

<style scoped>
.toggle-container {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.dark-mode-text {
  margin-left: 1em;
}

.content {
  margin-top: 50px;
  padding: 10px;
}


</style>
