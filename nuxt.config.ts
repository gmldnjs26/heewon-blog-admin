// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: 'test',
    public: {
      publicApiKey: '345',
    },
  },
  modules: ['nuxt-icon'],
  nitro: {},
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {},
  webpack: {},
})
