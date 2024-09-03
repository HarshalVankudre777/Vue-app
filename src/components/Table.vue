<script setup>
import {useFormStore} from '../stores/formStore';
import {storeToRefs} from 'pinia';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const formStore = useFormStore();
const {formDataArray} = storeToRefs(formStore);

const handleButtonClick = (rowData) => {

    const index = formDataArray.value.findIndex((item) => item.id === rowData.id);
    formDataArray.splice(index, 1)


};

</script>

<template>
  <div class="card">
    <DataTable :value="formDataArray" table-style="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="amount" header="Amount"></Column>
      <Column field="category" header="Category"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button
              label="Delete"
              @click="handleButtonClick(slotProps.rowData)"
          />
        </template>
      </Column>
    </DataTable>

    <DataTable>

    </DataTable>
  </div>
  <p>{{formDataArray.length}}</p>
</template>

<style scoped>
</style>
