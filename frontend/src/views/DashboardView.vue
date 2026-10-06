<template>
    <div class="w-full min-h-screen bg-gray-50 p-4 md:p-8">

        <!-- <FormProduct></FormProduct> -->


        <div v-if="produtos" class="w-full min-h-screen bg-gray-50 p-4 md:p-8 space-y-4">

            <div v-for="produto in produtos" :key="produto.id"
                class="w-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col md:flex-row md:items-center justify-between p-6 gap-6">

                <div class="flex-1 space-y-2">
                    <div class="flex items-center gap-3">
                        <h3 class="text-lg font-bold text-gray-900">{{ produto.nome }}</h3>
                    </div>

                    <p class="text-sm text-gray-600 line-clamp-2 md:line-clamp-none">
                        {{ produto.descricao }}
                    </p>
                </div>

                <div
                    class="flex flex-wrap items-center gap-6 md:gap-12 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">

                    <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Quantidade</span>
                        <span class="text-lg font-semibold text-gray-800">{{ produto.quantidade }}</span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Categoria</span>
                        <span class="text-lg font-semibold text-gray-800">{{ produto.categoria }}</span>
                    </div>

                    <div class="flex flex-col">
                        <span class="text-xs font-medium text-gray-400 uppercase tracking-wider">Preço de Venda</span>
                        <span class="text-lg font-bold text-emerald-600">{{ produto.preco }}</span>
                    </div>

                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <button type="button"
                            class="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Editar
                        </button>
                        <button type="button"
                            class="flex-1 sm:flex-none px-4 py-2 bg-red-50 text-sm font-medium text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                            Excluir
                        </button>
                    </div>

                </div>
                
            </div>
            <AppButton to="/test" />
        </div>

        <div v-else>
            Loading..
        </div>

    </div>
</template>

<script>
// import FormProduct from '@/components/FormProduct.vue';
import AppButton from '@/components/AppButton.vue';
import { ref } from 'vue';

export default {
    data() {
        return {
            dados: null,
            inputNome: ref(null),
            inputCategoria: ref(null),
            inputQuantidade: ref(null),
            inputPreco: ref(null),
            inputDescricao: ref(null),

            produtos: []
        }
    },

    components: {
        // FormProduct
        AppButton
    },

    methods: {

        async fetchData() {
            try {
                const response = await (await fetch(`http://localhost:8000/api/produto`))

                const data = await response.json()

                this.produtos = data
                return data

            } catch (error) {
                console.log(error)
            }

        }
    },

    async mounted() {
        this.dados = await this.fetchData()
        console.log(process.env.API_URL)
    }
}
</script>

<style></style>