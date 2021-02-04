export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Naked UI — Less is more',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Naked UI is a minimalist UI library designed for best performance, scalability and maintainability providing excellent developer experience' },
      { name: 'og:description', content: 'Naked UI is a minimalist UI library designed for best performance, scalability and maintainability providing excellent developer experience' },
      { name: 'og:image', content: '/naked-ui-og-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { link: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;700;800;900&display=swap', rel: 'stylesheet' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  sitemap: {
    hostname: 'https://naked-ui.org',
    gzip: true
  },

  styleResources: {
    scss: [
      '~/node_modules/sxcss/index.scss',
      '~/styles/global/**.scss'
    ]
  },

  fontawesome: {
    icons: {
      brands: ['faGithub']
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
