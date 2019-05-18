<template>
    <section class="homepage">
        <div class="hide homepage-wrapper" :class="{ loaded:loaded }">
            <h1 class="half-height">
                Hi, I'm Thomas, and I build

                <br />
                <no-ssr placeholder="...">
                    <vue-typer :repeat="0" :erase-delay="250"
                        :text="['websites', 'cloud solutions', 'excel add-ons', 'webapplications', 'slackbots', 'api\'s', '...', 'what can I build for you?', ]">
                    </vue-typer>
                </no-ssr>
            </h1>
            <section>
                <button type="button" class="nes-btn is-primary"
                    onclick="document.getElementById('dialog-default').showModal();">
                    Contact
                </button>
                <dialog class="nes-dialog" id="dialog-default">
                    <form method="dialog" @submit.prevent="contact">
                        <p class="title">Let's build something:</p>
                        <a id="close-btn"> <i class="nes-icon close is-small"
                                onclick="document.getElementById('dialog-default').close();"></i></a>
                        <div class="nes-field">
                            <label for="name_field">Your email</label>
                            <input type="email" v-model="email" id="name_field" class="nes-input" required>
                        </div>

                        <label for="textarea_field">Textarea</label>
                        <textarea v-model="contactText" id="textarea_field" class="nes-textarea" required></textarea>

                        <menu>
                            <button onclick="document.getElementById('dialog-default').close();" type="reset"
                                class="nes-btn">Cancel</button>
                            <button class="nes-btn is-primary">Confirm</button>
                        </menu>
                    </form>
                </dialog>
            </section>
        </div>
        <footer class="contact-footer">

            <a href="mailto:hello@thomasmaclean.be?subject=Hi" target="_blank" rel="noopener noreferrer"> <i
                    class="nes-icon gmail is-large"></i></a>
            <a href="https://www.linkedin.com/in/thomas-andrew-maclean" target="_blank" rel="noopener noreferrer"> <i
                    class="nes-icon linkedin is-large"></i></a>
            <a href="https://github.com/ThomasAndrewMacLean" target="_blank" rel="noopener noreferrer"><i
                    class="nes-icon github is-large"></i>
            </a>
        </footer>
    </section>
</template>

<script>
    import '../node_modules/nes.css/css/nes.min.css';
    import '../node_modules/dialog-polyfill/dist/dialog-polyfill.css';

    if (process.browser) {
        const dialogPolyfill = require('dialog-polyfill');
        if (dialogPolyfill) {
            var dialog = document.getElementById('dialog-default');
            dialogPolyfill.default.registerDialog(dialog);
        }


        var VueTyper = require('vue-typer').VueTyper;
    }
    // import { VueTyper } from 'vue-typer';

    export default {
        data() {
            return {
                projects: [],
                clicked: false,
                loaded: false,
                showModal: false,
                email: '',
                contactText: ''
            };
        },
        components: {
            VueTyper
        },
        methods: {
            contact() {

                const body = JSON.stringify({
                    email: this.email,
                    contactText: this.contactText
                });

                this.email = '';
                this.contactText = '';
                document.getElementById('dialog-default').close();

                fetch('https://yawxz3ocl1.execute-api.eu-west-1.amazonaws.com/dev/contactform', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body
                });


            }
        },
        mounted() {

            setTimeout(() => {
                this.loaded = true;
            }, 150);
        }
    };

</script>

<style scoped>
    #close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    menu {
        padding-inline-start: 0;
        display: flex;
        justify-content: space-evenly;
    }

    .half-height {
        height: 55%;
        margin-top: 10%;
    }

    footer {
        background: lightseagreen;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
    }

    .homepage-wrapper {
        display: flex;
        height: 100%;
        flex: 1 1;
        flex-direction: column;
        align-items: center;
    }

    .homepage {
        font-family: 'Press Start 2P';
        position: absolute;
        top: 0;
        bottom: 0;
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
