<template>
    <div id="post" v-editable="blok">
        <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <section class="post-content">
            <h1>{{ title }}
                <span class="create-date">({{new Date(date.split(" ")[0]).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}})</span>
            </h1>
            <code>
                <a class="sm-m link clear" :href="link" target="_blank">{{link}}</a>
            </code>
            <code>
                <a class="sm-m link clear" :href="link_code" target="_blank">{{link_code}}</a>
            </code>
            <code>
                <a class="sm-m link clear" v-if="link_code2" :href="link_code2" target="_blank">{{link_code2}}</a>
            </code>


            <p class="sm-m clear">{{ description }}</p>

            <p class="sm-m clear">Techniques</p>
            <ul class="clear">
                <li class="sm-m" v-for="t in techniques" :key="t">
                    {{t}}
                </li>
            </ul>
            <p class="clear">
                <a @click="openJson">packagejson</a>
                <code class="neg-margin-left" v-if="packagejsonOpen">
                    <pre>
                    {{ packagejson }}
                    </pre>
                </code>

            </p>
        </section>
    </div>
</template>

<script>
    // console.log(context.params);

    export default {
        data() {
            return {
                packagejson: '',
                packagejsonOpen: false
            };
        },
        asyncData(context) {
            return context.app.$storyapi
                .get('cdn/stories/projects/' + context.params.postId, {
                    version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
                })
                .then(res => {
                    const blok = res.data.story.content;


                    return {
                        blok: blok,
                        image: blok.thumbnail,
                        title: blok.title,
                        //  content: blok.content
                        date: blok.date,
                        description: blok.description,
                        link: blok.link.url,
                        link_code: blok.link_code.url,
                        link_code2: blok.link_code2 && blok.link_code2.url,
                        techniques: blok.techniques.map(t => t.name)
                    };
                });
        },
        mounted() {
            this.$storyblok.init();
            this.$storyblok.on('change', () => {
                location.reload(true);
            });

        },
        methods: {
            openJson() {
                this.packagejsonOpen = !this.packagejsonOpen;
                if (this.packagejson) return;
                let repo = this.link_code.split('ThomasAndrewMacLean/')[1].split('/')[0];
                try {
                    if (window) {
                        fetch(
                            `https://raw.githubusercontent.com/ThomasAndrewMacLean/${repo}/master/package.json`
                        ).then(
                            x => {
                                x.json().then(y => this.packagejson = y);
                            });
                    }
                } catch (error) {
                    console.log(error);

                }

            }
        }
    };

</script>

<style scoped>
    .neg-margin-left {
        margin-left: -8rem;
    }

    pre {
        background: var(--color-two);
        word-wrap: break-word;
        white-space: pre-wrap;
        display: block;
        font-family: monospace;
        white-space: pre;
        margin: 1em 0px;
    }

    h1 {
        padding: 3rem 0 1rem 2rem;
        margin-left: -1rem;
    }

    .create-date {
        font-size: 1rem;
    }

    .clear {
        clear: both;
        float: left;
    }

    .sm-m {
        margin: 1rem;
    }

    .post-thumbnail {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center;
    }

    .post-content {
        width: 80%;
        max-width: 500px;
        margin: auto;
    }

    .post-content p {
        white-space: pre-line;
    }

    #post {
        width: 100vw;
        /* overflow: hidden; */
    }

</style>
