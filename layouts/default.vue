<template>
    <div>
        <the-header/>
        <nuxt/>
        <footer>
            <code>
                made by:
                <a href="mailto:thomas.maclean+work@gmail.com">thomas maclean</a>
                <router-link class="emoji" to="Admin">🤖</router-link>

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
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        background: #faffb8;
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

    footer {
        background: #c5f0a4;
        margin-top: 2rem;
        height: 3rem;
        height: 60px;
        width: 100vw;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: medium;

    }

</style>
