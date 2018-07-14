<template>
  <nuxt-link :to="id">
    <article class="post-preview">
      <img :src="'https:' + thumbnailImage" alt="">
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
      </div>
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
   margin:3rem;
   padding:2rem;
  }

  .post-preview-thumbnail {
    height: 100%;
  }

</style>
