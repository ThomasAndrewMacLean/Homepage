<template>
    <div class="post-preview">
        <nuxt-link :to="'../projects/' + id">
            <h1 class="preview-title">{{ title }}</h1>
            <img class="preview-photo" :src="'https:' + thumbnailImage" alt="">
            <p class="preview-descr block-with-text">{{ excerpt }}</p>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            excerpt: {
                type: String,
                required: true
            },
            thumbnailImage: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        }
    };

</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .post-preview {
        /* margin: 3rem;
    padding: 2rem; */
        height: 25rem;
        overflow: hidden;
    }

    .preview-photo {
        width: 100%;
        height: 200px;
        object-fit: cover;
        filter: grayscale(85%);
    }

    .preview-photo:hover {
        filter: grayscale(0);
        box-shadow: 0px 0px 20px 0px var(--color-text);
    }

    .preview-title {
        margin: 2rem;
        color: var(--color-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .preview-descr {
        margin: 1rem;
        color: var(--color-text);
    }

    .post-preview-thumbnail {
        height: 100%;
    }

    .block-with-text {
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 3.6em;
        text-align: justify;
        margin-right: -1em;
        padding-right: 1em;
        width: calc(100% - 1rem);
    }

    .block-with-text:before {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .block-with-text:after {
        content: '';
        position: absolute;
        right: 0;
        width: 1em;
        height: 1em;
        margin-top: 0.2em;
        background: white;
    }

</style>
