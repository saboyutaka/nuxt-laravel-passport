require('dotenv').config()

export default {
  mode: 'universal',
  env: {
    LARAVEL_APP_URL: process.env.LARAVEL_APP_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/callback',
      home: '/home'
    },
    strategies: {
      'laravel.passport': {
        url: process.env.LARAVEL_APP_URL,
        client_id: process.env.LARAVEL_PASSPORT_CLIENT_ID,
        client_secret: process.env.LARAVEL_PASSPORT_CLIENT_SECRET,
        userinfo_endpoint: process.env.LARAVEL_APP_URL + '/api/user'
      },
    }
  }
}

