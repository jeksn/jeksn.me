// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxthq/studio'],
  content: {
    documentDriven: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
