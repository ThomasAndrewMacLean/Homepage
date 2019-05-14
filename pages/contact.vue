<template>
    <section class="container">
        <form @submit.prevent="contact">
            <input type="email" placeholder="email@📬.be" v-model="email" autofocus required>
            <textarea placeholder="hi..." v-model="contactText" cols="30" rows="5"></textarea>
            <input type="submit" value="send" :disabled="!email || !contactText"  required>
        </form>

    </section>
</template>

<script>
    export default {

        data() {
            return {
                contactText: '',
                email: ''
            };
        },
        methods: {
            contact() {
                
                fetch('https://yawxz3ocl1.execute-api.eu-west-1.amazonaws.com/dev/contactform', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        contactText: this.contactText
                    })
                }).then(x => {
this.contactText = '';
                this.email = '';
                });


            }
        }
    };

</script>

<style>
    section {
        color: var(--color-text);
    }


    textarea {
        width: 90vw;
        max-width: 500px;
        padding: 1rem;
        font-size: 1rem;
        color: var(--color-text);

    }

    input {
        width: 90vw;
        max-width: 500px;
        margin: 1rem 0;
        padding: 1rem;
        font-size: 1rem;
        color: var(--color-text);


    }

    input[type="submit"] {
        background: var(--color-two);
    }

    .container {
        flex-direction: column;
        justify-content: space-evenly;
    }

    form {
        max-width: 500px;
        flex-direction: column;
        justify-content: space-evenly;
    }

</style>
