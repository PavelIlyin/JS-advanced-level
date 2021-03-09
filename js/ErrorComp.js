Vue.component('error', {
    data() {
        return {
            errors: [],
            err: "Сервер временно недоступен!"
        }
    },
    template: `
        <div class=err v-if="errors.length != 0">{{ err }}</div>`
});