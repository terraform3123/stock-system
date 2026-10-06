<template>
    <router-link :to="to"
        class="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-sm transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 outline-none">
        Cadastrar Produto
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: [String, Object],
            required: true
        }
    }
}
</script>
