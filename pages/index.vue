<template>
    <section class="container">
        <div class="div-wrap">
            <h1 class="title">Overview of my Side Projects</h1>
            <div class="input-wrap">
                <input type="text" v-model="searchInput" @input="searchTechniques" placeholder="Search Techniques">
            </div>
            <project-thumb v-bind:class="{ 'hide': project.hide}" class="thumbs" v-for="project in projects" :key="project.id" :title="project.title"
                :excerpt="project.description" :thumbnailImage="project.thumbnailImage" :id="project.id" />
        </div>
    </section>
</template>

<script>
import ProjectThumb from '@/components/ProjectThumb';
export default {
    components: {
        ProjectThumb
    },
    data() {
        return {
            projects: [],
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
        return context.app.$storyapi
            .get('cdn/stories', {
                version:
                    process.env.NODE_ENV == 'production'
                        ? 'published'
                        : 'draft',
                starts_with: 'projects'
            })
            .then(res => {
                return {
                    projects: res.data.stories
                        .map(pr => {
                            return {
                                id: pr.slug,
                                date: pr.content.date,
                                description: pr.content.description,
                                title: pr.content.title,
                                link: pr.content.link,
                                link_code: pr.content.link_code,
                                thumbnailImage: pr.content.thumbnail,
                                techniques: pr.content.techniques.map(
                                    t => t.name
                                ),
                                searchString: pr.content.techniques
                                    .map(t => t.name)
                                    .join('-')
                                    .toLowerCase()
                            };
                        })
                        .sort((a, b) => {
                            //split date on space, so safari can understand it
                            return (
                                new Date(b.date.split(' ')[0]) -
                                new Date(a.date.split(' ')[0])
                            );
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

<style scoped>
.div-wrap {
    width: 100vw;
}

.input-wrap {
    margin-top: 4rem;
    height: 3rem;
}

::selection {
    background: var(--color-five);
    /* WebKit/Blink Browsers */
}

::-moz-selection {
    background: var(--color-five);
    /* Gecko Browsers */
}

input {
    caret-color: var(--color-caret);

    font-size: 3rem;
    height: 4.5rem;
    outline: none;
    padding-left: 15px;
    padding-top: 3px;
    background: var(--color-two);
    border: none;
    padding-bottom: 5px;
    border-bottom: 4px solid gray;
}

.thumbs {
    width: 33.3333%;
    /* height: 25rem; */
    overflow: hidden;
    float: left;
    padding: 2rem;
    display: block;
}

.hide {
    display: none;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: var(--color-text);
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: var(--color-light-text);
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

@media (max-width: 902px) {
    .thumbs {
        width: 50%;
    }
    .title {
        margin: 1rem;
        font-size: 4rem;
    }
}

@media (max-width: 500px) {
    .thumbs {
        width: 100%;
        padding: 2rem 0;
    }
    .title {
        margin: 1rem;
        font-size: 3rem;
    }
    input {
        width: 90%;
    }
}
</style>
