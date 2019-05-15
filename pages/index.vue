<template>
    <section @click="clicked = ! clicked" :class="{ clicked: clicked }" class="container">
        <h1>Hi, I'm <a href="mailto:hello@thomasmaclean.be?subject=Hi">Thomas</a> and I build <p id="type-writer"></p></h1>
    </section>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
    export default {

        data() {
            return {
                projects: [],
                clicked: false
            };
        },
        mounted() {
const skilzz = document.getElementById('type-writer');

const typewriter = new Typewriter(skilzz, {
    strings: ['websites', 'mailing-lists', 'excel add-ons', 'webapplications', 'slackbots', "api's", "... what can I build for you?", ],
  autoStart: true,
});
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
    
    .clicked {
        filter: brightness(0.5) sepia(1) hue-rotate(-70deg) saturate(5);
    }

    a {
        position: relative;
        text-decoration-style: wavy;
        text-decoration-color: lightcoral;
    }

    h1 {
        padding: 2rem;
    }

    a::after {
        /* content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;

        width: 100%;
        border-bottom: 2px solid lightcoral; */

    }
    
    #type-writer{
        position: fixed;
        display: inline-block;}

</style>
