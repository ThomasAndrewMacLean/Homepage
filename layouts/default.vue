<template>
    <div id="stage" class="layout">
        <the-header />

        <nuxt class="nuxt" />

        <footer>
            <code>
                made by:
                <a href="mailto:hello@thomasmaclean.be">thomas maclean</a>
                🤖
                {{'© ' +new Date().getFullYear()}}
            </code>
        </footer>
    </div>
</template>

<script>
    import theHeader from '@/components/Header';

    export default {
        components: {
            theHeader
        }
    };

</script>

<style>
    body {
        font-family: 'Press Start 2P', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }

    span.char.custom.typed {
        color: white;
    }

    a.link {
        color: var(--color-three);
    }

    .link:hover {
        border-bottom: 2px solid var(--color-two);
    }

    .link {
        text-decoration: none;
        color: var(--color-four);
        border-bottom: 2px solid var(--color-one);
    }

    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    /* //#faffb8
  //#c5f0a4
  //#35b0ab
  //#226b80 */

    .nuxt {
        min-height: calc(100vh - 10rem);
        width: 100vw;
        overflow: hidden;
    }

    footer {
        background: var(--color-three);
        background-image: url("data:image/svg+xml,%3Csvg width='48' height='32' viewBox='0 0 48 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M27 32c0-3.314 2.686-6 6-6 5.523 0 10-4.477 10-10S38.523 6 33 6c-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.21 0-4 1.79-4 4h-2zm-6 0c0-3.314-2.686-6-6-6-5.523 0-10-4.477-10-10S9.477 6 15 6c3.314 0 6-2.686 6-6h-2c0 2.21-1.79 4-4 4C8.373 4 3 9.373 3 16s5.373 12 12 12c2.21 0 4 1.79 4 4h2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        margin-top: 2rem;
        height: 4rem;
        width: 100vw;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: medium;
    }

    a {
        color: white;
    }

    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .layout {
        /* overflow hidden so it wont scroll horizontally on firefox 
    because of the scrollbar */
        overflow: hidden;
    }

    @media (max-width: 300px) {
        footer {
            height: 3rem;
        }

        .nuxt {
            min-height: calc(100vh - 8rem);
        }
    }

</style>
