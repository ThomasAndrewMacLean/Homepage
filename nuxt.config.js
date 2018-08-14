const pkg = require('./package');

module.exports = {
    mode: 'universal',

    /*
   ** Headers of the page
   */
    head: {
        title: 'Thomas MacLean',
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: pkg.description
        },
        {
            name:'google-site-verification',
            content:'bI9hWQ4QqE1bNeSREWXaybhSEIMULuhW2ArIiyVcUdA'
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        },
        {
            rel:'stylesheet',
            type:'text/css',
            href:'/colours.css'
        }]
    },

    /*
   ** Customize the progress-bar color
   */
    loading: {
        color: '#FFFFFF'
    },

    /*
   ** Global CSS
   */
    css: [],

    /*
   ** Plugins to load before mounting the App
   */
    plugins: [
       
    ],

    /*
   ** Nuxt.js modules
   */
    modules: [
        ['storyblok-nuxt', {
            accessToken: 'rnWt2D5baTkDi6DgLKNpAAtt',
            cacheProvider: 'memory'
        }]
    ],
    /*
   ** Axios module configuration
   */
    axios: {
    // See https://github.com/nuxt-community/axios-module#options
    },

    /*
   ** Build configuration
   */
    build: {
    /*
     ** You can extend webpack config here
     */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
