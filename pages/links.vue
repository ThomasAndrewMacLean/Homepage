<template>
    <section>
        hi these are the links you are looking for
        <div :key="l.id" v-for="l in links">
            <pre>{{l}}</pre>
        </div>
    </section>
</template>

<script>
    export default {

        data() {
            return {
                links: [],
                searchInput: ''
            };
        },
        methods: {
            searchTechniques() {
                this.projects.forEach(proj => {

                    proj.hide =
                        this.searchInput &&
                        !proj.searchString.includes(this.searchInput.toLowerCase());
                });
            }
        },
        asyncData(context) {
            console.log('start');

            return context.app.$storyapi
                .get('cdn/stories', {
                    version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
                    starts_with: 'goodlinks'
                })
                .then(res => {
                    console.log(res);
                    return {
                        links: res.data.stories.map(l => {
                            return {
                                description: l.content.description,
                                link: l.content.link
                            };
                        })
                    };
                })
                .catch(res => {
                    context.error({
                        statusCode: res.response.status,
                        message: res.response.data
                    });
                });
        }
    };

</script>

<style>


</style>
