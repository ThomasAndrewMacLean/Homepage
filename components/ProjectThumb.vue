<template>
    <nuxt-link :to="'projects/'+id">
        <article class="post-preview">
            <h1>{{ title }}</h1>
            <img class="preview-photo" :src="'https:' + thumbnailImage" alt="">
            <p>{{ excerpt }}</p>
        </article>
    </nuxt-link>
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

<style>
    .thumb {
        width: 25%;
        outline: 1px solid greenyellow;
    }

    .post-preview {
        /* margin: 3rem;
    padding: 2rem; */
        overflow: hidden;
    }

    .preview-photo {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }


    .post-preview-thumbnail {
        height: 100%;
    }

</style>
