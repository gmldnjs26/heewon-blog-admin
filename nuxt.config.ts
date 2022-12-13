// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: 'test',
    public: {
      publicApiKey: '345',
    },
  },
  // 외부파일설정
  nitro: {},
  postcss: {},
  vite: {},
  webpack: {},
})
