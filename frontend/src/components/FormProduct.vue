<template>

    <div class="w-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        <div class="p-6 border-b border-gray-100 bg-gray-50/50">
            <h2 class="text-xl font-bold text-gray-800">Adicionar Novo Produto ao Estoque</h2>
            <p class="text-sm text-gray-500 mt-1">Preencha as informações abaixo para registar o item.</p>
        </div>

        <form class="p-6 space-y-6">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div class="md:col-span-2">
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Nome do Produto</label>
                    <input type="text" placeholder="Ex: Teclado Mecânico RGB"
                        class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Categoria</label>
                    <select
                        class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white transition-all outline-none">
                        <option value="">Selecione...</option>
                        <option value="perifericos">Periféricos</option>
                        <option value="hardware">Hardware</option>
                        <option value="escritorio">Escritório</option>
                    </select>
                </div>

                <div class="md:col-span-3">
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Descrição</label>
                    <textarea rows="3" placeholder="Digite os detalhes e especificações do produto..."
                        class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none resize-none"></textarea>
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Qtd. Inicial</label>
                    <input type="number" min="0" placeholder="0"
                        class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        required />
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Preço de Venda</label>
                    <input type="number" step="0.01" placeholder="0,00"
                        class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        required />
                </div>

            </div>

            <div class="flex items-center justify-end space-x-4 border-t border-gray-100 pt-6 mt-6">
                <button type="button"
                    class="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                    Cancelar
                </button>

                <button type="submit"
                    class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-sm transition-colors">
                    Registar Produto
                </button>
            </div>

        </form>
    </div>

</template>

<script></script>

<style></style>