<template>
    <div id="post" v-editable="blok">
        <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <section class="post-content">
            <h1>{{ title }} <span class="create-date">({{new Date(date).toLocaleDateString('en-GB', {  year: 'numeric', month: 'long' })}})</span></h1>
            <a class="sm-m link" :href="link" target="_blank">{{link}}</a>
            <a class="sm-m link" :href="link_code" target="_blank">{{link_code}}</a>
            <a class="sm-m link" v-if="link_code2" :href="link_code2" target="_blank">{{link_code2}}</a>


            <p class="sm-m link">{{ description }}</p>

            <p class="sm-m link">Techniques</p>
            <ul class="link">
                <li class="sm-m" v-for="t in techniques" :key="t">
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
            .get('cdn/stories/projects/' + context.params.postId, {
                version:
                    process.env.NODE_ENV == 'production' ? 'published' : 'draft'
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
        this.$storyblok.on('change', () => {
            location.reload(true);
        });
    }
};
</script>

<style scoped>
h1 {
    padding: 3rem 0 1rem 2rem;
    margin-left: -1rem;
}
.create-date {
    font-size: 1rem;
}
.link {
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
    overflow: hidden;
}
</style>
