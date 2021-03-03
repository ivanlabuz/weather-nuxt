export default {
  head: {
    title: 'weather',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
  },

  css: [
    '~layouts/global.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  build: {},
}
