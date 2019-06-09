import NuxtConfiguration from '@nuxt/config'

require('dotenv').config()

const config: NuxtConfiguration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type: 'text/javascript',
        src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}`
      }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  axios: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8080'
    }
  },
  build: {
    extend(config, ctx) {}
  }
}

export default config
