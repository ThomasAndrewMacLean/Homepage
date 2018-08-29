<template>
    <section>
        <h1>About</h1>
        <p>
            <ul>
                <li>
                    Hi, this is my personal site where I keep track of all my side-projects.
                </li>
                <li>
                    It has a searchbar that filters projects by technique used.
                </li>
                <li>
                    Feel free to look up some code, check some projects or ask me a question.
                </li>
                <li>
                    Keep in mind that most of these sideprojects are just quick tests, to test out new techniques,
                    frameworks or
                    hosting methods.
                </li>
                <li>
                    So not always will you find best practices, nor full test coverage. If this bothers you, feel free
                    to submit
                    a pull request.
                </li>
                <li>
                    <a href="https://thomasandrewmaclean.github.io/" class="link">CV</a>
                </li>
                <li>
                    <a class="link" href="www.linkedin.com/in/thomas-andrew-maclean">linkedin</a>
                </li>

            </ul>
        </p>
        <div class="peace">☮️ ✌️</div>
    </section>
</template>

<script>


</script>

<style scoped>
    h1 {
        min-height: 3rem;
        margin-top: 1rem;
    }



    ul {
        list-style: none;
        padding: 0;

    }

    li {
        margin: 1rem 0;
    }

    section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        color: var(--color-text);
    }

    p {
        max-width: 500px;
        text-align: center;
        width: 80vw;
    }

    .peace {
        font-size: 3rem;
    }

</style>
