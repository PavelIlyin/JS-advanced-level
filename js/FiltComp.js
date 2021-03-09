Vue.component('search-form', {

    template: `
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter">
            <input type="text" class="search-field" v-model="$parent.userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>`
});