<template>
    <header>
        <ul class="nav-links">
            <nuxt-link to="/" tag="li" class="nav-link" exact>
                <a>Home</a>
            </nuxt-link>
            <nuxt-link to="/about" tag="li" class="nav-link" exact>
                <a>About</a>
            </nuxt-link>
            <nuxt-link to="/contact" tag="li" class="nav-link" exact>
                <a>Contact</a>
            </nuxt-link>
        </ul>
    </header>
</template>

<script>
    export default {};
    //#faffb8
    //#c5f0a4
    //#35b0ab
    //#226b80

</script>


<style scoped>
    header {
        background: var(--color-three);
        color: white;
        height: 4rem;
        display: flex;
        align-items: center;
        font-size: 2rem;
    /* background-color: #DFDBE5; */
    background-image: url("data:image/svg+xml,%3Csvg width='48' height='32' viewBox='0 0 48 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M27 32c0-3.314 2.686-6 6-6 5.523 0 10-4.477 10-10S38.523 6 33 6c-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.21 0-4 1.79-4 4h-2zm-6 0c0-3.314-2.686-6-6-6-5.523 0-10-4.477-10-10S9.477 6 15 6c3.314 0 6-2.686 6-6h-2c0 2.21-1.79 4-4 4C8.373 4 3 9.373 3 16s5.373 12 12 12c2.21 0 4 1.79 4 4h2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }


    @media (max-width: 500px) {
        header {
            font-size: 1.8rem;
        }

        .nav-links {
            padding: 0;
            display: flex;
            width: 100vw;
            justify-content: space-around;
        }

        .nav-link {
            margin: 10px;
        }
    }

    @media (max-width: 300px) {
        header {
            font-size: 1rem;
            height: 3rem;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
        /* background: darkgreen; */
    }

    li {
        margin: 1.2rem;
        display: inline;
    }

    a:hover {
        border-bottom: 3px solid var(--color-two);
    }

    .nuxt-link-active {
        border-bottom: 3px solid white;
    }

</style>
