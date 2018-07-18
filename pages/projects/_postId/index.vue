<template>
    <div id="post" v-editable="blok">
        <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <section class="post-content">
            <h1>{{ title }}</h1>
            <a :href="link">{{link}}</a><br>
            <a :href="link_code">{{link_code}}</a><br>
            <a :href="link_code2">{{link_code2}}</a><br>


            <p>{{ description }}</p>

            <ul>
                <li v-for="t in techniques" :key="t">
                    {{t}}
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    // console.log(context.params);

    export default {
        asyncData(context) {
            return context.app.$storyapi
                .get("cdn/stories/projects/" + context.params.postId, {
                    version: process.env.NODE_ENV == "production" ? "published" : "draft"
                })
                .then(res => {
                    console.log('res');
                    console.log(res);
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
            this.$storyblok.on("change", () => {
                location.reload(true);
            });
        }
    };

</script>

<style>
    .post-thumbnail {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center;
        -webkit-filter: blur(10px);
    }

    .post-thumbnail:hover {
        -webkit-filter: blur(0px);
    }

    .post-content {
        width: 80%;
        max-width: 500px;
        margin: auto;
    }

    .post-content p {
        white-space: pre-line;
    }

</style>
