import { defineStore } from 'pinia';
import { ref, reactive } from "vue";

export const useFormStore = defineStore('form', () => {
    const formDataArray = ref([]);

    function addFormData(data) {
        // Assign the id based on the length of the array to maintain sequential ids
        data.id = formDataArray.value.length + 1;
        formDataArray.value.push(reactive(data));
    }

    function deleteFormDataItem(id) {
        const index = formDataArray.value.findIndex(item => item.id === id);
        if (index !== -1) {
            formDataArray.value.splice(index, 1);
            // Adjust the IDs for remaining items
            formDataArray.value.forEach((item, i) => {
                item.id = i + 1;
            });
        }
    }

    return {
        formDataArray,
        addFormData,
        deleteFormDataItem
    };
});
