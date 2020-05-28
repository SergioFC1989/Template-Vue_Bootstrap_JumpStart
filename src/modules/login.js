import { updateField, getField } from 'vuex-map-fields'
export default {
    strict: true,
    state: {
        user:'',
        pass: '',

    },
    mutations: {
        updateField,
    },
    actions: {

    },
    getters: {
        getField,
    }
}