import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
    state: () => ({
        formDataArray: []
    }),
    actions: {
        addFormData(data) {
            this.formDataArray.push(data);
        },

    }
});
