// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://kit.fontawesome.com/c2ef00ba70.css' }]
    }
  },
})
