<template>
    <div class="post-preview">
        <nuxt-link :to="'projects/'+id">
            <h1 class="preview-title">{{ title }}</h1>
            <img class="preview-photo" :src="'https:' + thumbnailImage" alt="">
            <p class="preview-descr">{{ excerpt }}</p>
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

    h1 {
        white-space: nowrap;
    }

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

    .preview-photo:hover {
        -webkit-filter: blur(1px);
        box-shadow: 0px 0px 20px 0px #35495e;
    }

    .preview-title {
        margin: 2rem;
        color: #35495e;
    }

    .preview-descr {
        margin: 1rem;
        color: #35495e;
    }

    .post-preview-thumbnail {
        height: 100%;
    }

</style>
