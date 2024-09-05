<script setup>
import { useFormStore } from '@/stores/formStore';
import { storeToRefs } from 'pinia';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const formStore = useFormStore();
const { formDataArray } = storeToRefs(formStore);

const handleButtonClick = (rowData) => {
  if (rowData.id !== undefined) {
    formStore.deleteFormDataItem(rowData.id);
  } else {
    console.error('Row data or ID is undefined');
  }
};
</script>

<template>
  <div class="card">
    <DataTable :value="formDataArray" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="amount" header="Amount"></Column>
      <Column field="category" header="Category"></Column>
      <Column header="Actions">
        <template #body="slotProps" >
          <Button
              label="Delete"
              @click="handleButtonClick(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
</style>