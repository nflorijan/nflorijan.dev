export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nflorijan.dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    style: [
      { cssText: '.async-hide { opacity: 0 !important} ', type: 'text/css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/styles/app.scss', lang: 'scss' }
  ],

  styleResources: {
    scss: [
      'styles/abstract/_variables.scss',
      'styles/abstract/_mixins.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://nflorijandev.local/graphql'
      }
    }
  },

  // Google fonts
  googleFonts: {
    display: 'swap',
    families: {
      Inter: {
        wght: [300, 400, 500, 700, 900]
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
