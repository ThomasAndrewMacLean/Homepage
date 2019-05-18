<template>
    <section @click="clicked = ! clicked" :class="{ clicked: clicked }" class="container">
        <div class="hide" :class="{ loaded:loaded }">
            <h1>
                Hi, I'm
                <a class="nes-btn" href="mailto:hello@thomasmaclean.be?subject=Hi">Thomas</a> and I build
                <br />
                <br />
                <no-ssr placeholder="...">
                    <vue-typer :repeat="0" :erase-delay="250"
                        :text="['websites', 'cloud solutions', 'excel add-ons', 'webapplications', 'slackbots', 'api\'s', '... what can I build for you?', ]">
                    </vue-typer>
                </no-ssr>
            </h1>
        </div>
    </section>
</template>

<script>
    import '../node_modules/nes.css/css/nes.min.css';
    if (process.browser) {
        var VueTyper = require('vue-typer').VueTyper;
    }
    // import { VueTyper } from 'vue-typer';

    export default {
        data() {
            return {
                projects: [],
                clicked: false,
                loaded: false
            };
        },
        components: {
            VueTyper
        },
        mounted() {
            setTimeout(() => {
                this.loaded = true;
            }, 150);
        }
    };

</script>

<style scoped>
    .container {
        position: absolute;
        top: 0;
        left: 0;
        background: lightseagreen;
        color: whitesmoke;
        transition: all 0.5s ease;
    }

    .hide {
        transition: opacity 0.3s ease;
        opacity: 0;
    }

    .loaded {
        opacity: 1;
    }

    .clicked {
        /* filter: brightness(0.5) sepia(1) hue-rotate(-70deg) saturate(5); */
    }

    a {
        position: relative;
        text-decoration-style: wavy;
        text-decoration-color: lightcoral;
    }

    h1 {
        padding: 2rem;
    }

    .margingtop {
        margin-top: 1rem;

    }

    .vue-typer {
        /* position: fixed; */
        display: inline-block;
        color: white;
    }

</style>
