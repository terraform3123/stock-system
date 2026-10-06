/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./Public/index.html",     // <-- Ajustado com P maiúsculo como na sua árvore de arquivos
    "./public/index.html"      // Mantido em minúsculo por segurança caso o Windows mude o padrão
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
