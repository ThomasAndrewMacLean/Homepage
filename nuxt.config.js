const pkg = require('./package');
const importedRoutes = require('./sitemaproutes');

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'Thomas MacLean',
        meta: [
            {
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
                hid: 'author',
                name: 'author',
                content: 'Thomas MacLean'
            },
            {
                name: 'google-site-verification',
                content: 'bI9hWQ4QqE1bNeSREWXaybhSEIMULuhW2ArIiyVcUdA'
            },
            {
                name: 'theme-color',
                content: 'lightseagreen'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/colours.css'
            },
            {
                rel: 'canonical',
                href: 'https://thomasmaclean.be/'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Press+Start+2P'
            }
        ]
    },
    sitemap: {
        path: '/sitemap.xml',
        hostname: 'https://thomasmaclean.be',
        generate: true, // Enable me when using nuxt generate
        exclude: [],
        routes: importedRoutes
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
        //{ src: 'plugins/vue-typer.js', ssr: false }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'storyblok-nuxt',
            {
                accessToken: 'rnWt2D5baTkDi6DgLKNpAAtt',
                cacheProvider: 'memory'
            }
        ],
        ['@nuxtjs/sitemap'],
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-110018468-7'
            }
        ]
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
