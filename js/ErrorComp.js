Vue.component('error', {
    data() {
        return {
            err: ''
        }
    },
    methods: {
        setError(error) {
            this.err = error
        }
    },

    template: `
        <div class=err v-if="err.length !== 0">{{ err }}</div>`
});
