<template>
  <section @click="clicked = ! clicked" :class="{ clicked: clicked }" class="container">
    <h1>
      Hi, I'm
      <a href="mailto:hello@thomasmaclean.be?subject=Hi">Thomas</a> and I build
      <no-ssr>
        <vue-typer
          :repeat="0"
          :erase-delay="250"
          :text="['websites', 'cloud solutions', 'excel add-ons', 'webapplications', 'slackbots', 'api\'s', '... what can I build for you?', ]"
        ></vue-typer>
      </no-ssr>
    </h1>
  </section>
</template>

<script>
if (process.browser) {
    var VueTyper = require('vue-typer').VueTyper;
}
// import { VueTyper } from 'vue-typer';

export default {
    data() {
        return {
            projects: [],
            clicked: false
        };
    },
    // mounted() {
    //     const skilzz = document.getElementById('type-writer');
    //     const typewriter = new Typewriter(skilzz, {
    //         strings: [
    //             'websites',
    //             'cloud solutions',
    //             'excel add-ons',
    //             'webapplications',
    //             'slackbots',
    //             "api's",
    //             '... what can I build for you?'
    //         ],
    //         autoStart: true
    //     });
    // },
    components: {
        VueTyper
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

.vue-typer {
    position: fixed;
    display: inline-block;
    color: white;
}

</style>
