<template>
    <section class="homepage">
        <a id="success" href="#" class="nes-badge">
            <span class="is-success">SENT</span>
        </a>

        <div class="hide homepage-wrapper" :class="{ loaded:loaded }">
            <h1 class="top-text">
                Hi, I'm Thomas, and I build things:
                <br>
                <no-ssr placeholder="...">
                    <vue-typer :repeat="0" :erase-delay="250"
                        :text="['websites', 'cloud solutions', 'excel add-ons', 'web applications', 'slackbots', 'api\'s', '...', 'what can I build for you?', ]">
                    </vue-typer>
                </no-ssr>
            </h1>

            <section class="button-wrapper">
                <button type="button" class="nes-btn is-primary contact-btn"
                    onclick="document.getElementById('dialog-contact').showModal();">Contact</button>
                <button type="button" class="nes-btn is-warning skilzz-btn"
                    onclick="document.getElementById('dialog-skillz').showModal();">???</button>

                <dialog class="nes-dialog" id="dialog-skillz">
                    <form method="dialog" @submit.prevent>
                        <p class="title">
                            <i class="nes-icon is-medium star"></i>
                            <span class="skills">SKILLS</span>
                        </p>
                        <a class="close-btn">
                            <i class="nes-icon close is-small"
                                onclick="document.getElementById('dialog-skillz').close();"></i>
                        </a>

                        <div class="lists">
                            <ul class="nes-list is-circle">
                                <li v-for="skill in skillz" :key="skill">{{skill}}</li>
                            </ul>
                        </div>

                        <menu>
                            <button onclick="document.getElementById('dialog-skillz').close();" type="reset"
                                class="nes-btn">Cancel</button>
                        </menu>
                    </form>
                </dialog>
                <dialog class="nes-dialog" id="dialog-contact">
                    <form method="dialog" @submit.prevent="contact">
                        <p class="title">Let's build something:</p>
                        <a class="close-btn">
                            <i class="nes-icon close is-small"
                                onclick="document.getElementById('dialog-contact').close();"></i>
                        </a>
                        <div class="nes-field">
                            <label for="email">Your email:</label>
                            <input autocomplete="email" type="email" v-model="email" id="email_field" class="nes-input"
                                required>
                        </div>

                        <label for="textarea_field">How can i help:</label>
                        <textarea autocomplete="off" v-model="contactText" id="textarea_field" class="nes-textarea"
                            required></textarea>

                        <menu>
                            <button onclick="document.getElementById('dialog-contact').close();" type="reset"
                                class="nes-btn">Cancel</button>
                            <button class="nes-btn is-primary">Confirm</button>
                        </menu>
                    </form>
                </dialog>
            </section>
        </div>
        <footer class="contact-footer">
            <a href="mailto:hello@thomasmaclean.be?subject=Hi" aria-label="send me an email..." class="link-email"
                rel="noopener noreferrer">
                <i class="nes-icon gmail is-large"></i>
            </a>

            <a href="https://wa.me/+32497286511?text=Hello%20Thomas" target="_blank" rel="noopener noreferrer"
                class="link-whatsapp" aria-label="send me an message using whatsapp">
                <i class="nes-icon whatsapp is-large"></i>
            </a>

            <a href="https://www.linkedin.com/in/thomas-andrew-maclean" target="_blank" rel="noopener noreferrer"
                class="link-linkedin" aria-label="check out my linkedin profile">
                <i class="nes-icon linkedin is-large"></i>
            </a>
            <a href="https://github.com/ThomasAndrewMacLean" aria-label="check out my github profile" class="link-github" target="_blank"
                rel="noopener noreferrer">
                <i class="nes-icon github is-large"></i>
            </a>
        </footer>
    </section>
</template>

<script>
    import '../node_modules/nes.css/css/nes.min.css';
    import '../node_modules/dialog-polyfill/dist/dialog-polyfill.css';

    if (process.browser) {
        var dialogPolyfill = require('dialog-polyfill');
        if (dialogPolyfill) {
            const dialogContact = document.getElementById('dialog-contact');
            dialogPolyfill.default.registerDialog(dialogContact);
            const dialogSkillz = document.getElementById('dialog-skillz');
            dialogPolyfill.default.registerDialog(dialogSkillz);
        }

        var VueTyper = require('vue-typer').VueTyper;
    }
    // import { VueTyper } from 'vue-typer';

    export default {
        data() {
            return {
                loaded: false,
                email: '',
                contactText: '',
                skillz: [
                    'javascript',
                    'AWS',
                    'emailoctopus',
                    'react',
                    'vue',
                    'express.js',
                    'PWA',
                    'socket.IO',
                    'angular',
                    'sass',
                    'less',
                    'webpack',
                    'rollup',
                    'parcel',
                    'git',
                    'node',
                    'jest',
                    'CI/CD',
                    'mongo-DB',
                    'firebase',
                    'postSQL',
                    'lambda functions',
                    'unit testing',
                    'c#',
                    'api\'s',
                    'excel office.js',
                    'google-sheets api',
                    'sentry.io',
                    'twitter api',
                    'slack api',
                    'bulmaCSS',
                    'bootstrap',
                    'travis'
                ]
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

                try {
                    fetch(
                        'https://yawxz3ocl1.execute-api.eu-west-1.amazonaws.com/dev/contactform', {
                            method: 'POST',
                            mode: 'no-cors',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body
                        }
                    );
                } catch (err) {
                    this.$sentry.captureException(
                        new Error('error sending: ' + body)
                    );
                }

                const contactDialoge = document.getElementById('dialog-contact');

                if (contactDialoge.hasAttribute('open')) {
                    contactDialoge.close();
                }
                // catch sentry error
                const badge = document.getElementById('success');
                badge.style.right = '15px';
                setTimeout(() => {
                    badge.style.right = '-200px';
                }, 3500);
            }
        },
        mounted() {
            setTimeout(() => {
                this.loaded = true;
            }, 100);
        }
    };

</script>

<style scoped>
    #success {
        position: absolute;
        top: 15px;
        right: -200px;
        transition: right 0.5s ease;
    }

    ul {
        max-height: 49vh;
        overflow: auto;
    }

    .button-wrapper button:first-of-type {
        margin-right: 2rem;
    }

    .skills {
        margin: 0.5rem;
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    menu {
        padding-inline-start: 0;
        display: flex;
        justify-content: space-evenly;
    }

    .top-text {
        max-width: 750px;
        height: 55%;
        margin-top: 10%;
    }

    footer {
        background: initial;
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
        background: radial-gradient(rgba(0, 255, 0, 0.1), rgba(229, 255, 0, 0.452)),
            repeating-linear-gradient(transparent 0,
                rgba(0, 0, 0, 0.1) 4px,
                transparent 8px),
            linear-gradient(purple 10%, lightseagreen 80%);
        /* lightseagreen; */
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
