// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio',
    "@nuxthub/core",
    '@nuxt/image'
  ],
  content: {
    documentDriven: true
  }
})