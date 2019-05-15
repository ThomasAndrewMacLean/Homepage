<template>
    <section class="container">
        <h1>Hi, I'm <a href="mailto:hello@thomasmaclean.be?subject=Hi">Thomas</a> and I build websites</h1>
    </section>
</template>

<script>
    export default {

        data() {
            return {
                projects: [],
                searchInput: ''
            };
        },
        methods: {

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

</style>
