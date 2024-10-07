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
    documentDriven: true,
    highlight: {
      theme: {
          default: "tokyo-night",
          // dark: "github-dark",
      },
  },
  markdown: {
    anchorLinks: false,
  }
  }
})