<script setup>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Button from "primevue/button";
import {useFormStore} from '../stores/formStore'
import {ref} from 'vue';

const formStore = useFormStore()
const categories = ref([
  {label: 'Groceries', value: 'Groceries'},
  {label: 'Utilities', value: 'Utilities'},
  {label: 'Entertainment', value: 'Entertainment'}
]);

const description = ref(null)
const amount = ref(null)
const selectedCategory = ref(null);
let nextId = 1

const getNextID =() => {
   return nextId++;
}
const addExpense = () => {
  const expense = {};
  expense.id = getNextID()
  expense.description = description.value
  expense.amount = amount.value
  expense.category = selectedCategory.value

  formStore.addFormData(expense)
}
</script>

<template>
  <div class="flex flex-wrap mb-4 gap-2">
    <InputText v-model="description" placeholder="Description" aria-label="description"/>
    <br><br>
    <InputNumber v-model="amount" placeholder="Amount" mode="currency" currency="EUR" locale="de-DE"/>
    <br><br>
    <Select v-model="selectedCategory" :options="categories" optionLabel="label" optionValue="value"
            placeholder="Select a category"/>
  </div>
  <br><br>

  <Button label="Submit" severity="info" raised @click="addExpense"/>
</template>

<style scoped>
</style>
