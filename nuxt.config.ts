// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: 'test',
    public: {
      publicApiKey: '345',
    },
  },
  components: [
    {
      path: '~/components/atoms',
      pathPrefix: false,
    },
    {
      path: '~/components/molecules',
      pathPrefix: false,
    },
    {
      path: '~/components/organisms',
      pathPrefix: false,
    },
    {
      path: '~/components/global',
      global: true,
    },
  ],
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
