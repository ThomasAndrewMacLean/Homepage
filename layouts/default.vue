<template>
    <div id="stage" class="layout">
        <the-header/>
        
        <nuxt class="nuxt"/>
  
        <footer>
            <code>
                made by:
                <a href="mailto:hello@thomasmaclean.be">thomas maclean</a>
                <router-link class="emoji" to="Admin">🤖</router-link>

                {{'© ' +new Date().getFullYear()}}
            </code>
        </footer>
    </div>
</template>

<script>
import theHeader from '@/components/Header';
//import Hammer from 'hammerjs';

export default {
    components: {
        theHeader
    },
    methods: {
        test() {
            console.log('it is tested');
        }
    },
    mounted() {
        console.log('ok');
        const stage = document.getElementById('stage');
        // const mc = Hammer(stage);
        //mc.on('swiperight', this.test());
    }
};
</script>

<style>
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
.nuxt {
    min-height: calc(100vh - 10rem);
    width: 100vw;
    overflow: hidden;
}

footer {
    background: #c5f0a4;
    margin-top: 2rem;
    height: 4rem;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
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
