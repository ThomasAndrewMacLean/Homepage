<template>
    <header>
        <ul class="nav-links">
            <nuxt-link to="/" tag="li" class="nav-link" exact>
                <a>Home</a>
            </nuxt-link>
            <nuxt-link to="/projectsoverview" tag="li" class="nav-link" exact>
                <a>Projects</a>
            </nuxt-link>
            <!-- <nuxt-link to="/contact" tag="li" class="nav-link" exact>
                <a>Contact</a>
            </nuxt-link> -->
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
        border-bottom: 0.1rem solid var(--color-three);
        color: var(--color-three);
        height: 4rem;
        display: flex;
        align-items: center;
        font-size: 2rem;
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
