export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~~/assets/css/panda.css"],

  postcss: { plugins: { "@pandacss/dev/postcss": {} } },

  modules: ["@nuxt/eslint"],

  eslint: { config: { standalone: false } },
})
