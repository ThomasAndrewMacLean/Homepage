<template>
    <section class="container">
        <div>
            <h1 class="title">Stuff and so,... and some stuff</h1>
            <div class="input-wrap">
                <input type="text" v-model="searchInput" @input="searchTechniques" autofocus>
            </div>
            <project-thumb v-bind:class="{ 'selected': project.selected}" class="thumbs" v-for="project in projects" :key="project.id" :title="project.title" :excerpt="project.description"
                :thumbnailImage="project.thumbnailImage" :id="project.id" />
        </div>
    </section>
</template>

<script>
import ProjectThumb from "@/components/ProjectThumb";
export default {
  components: {
    ProjectThumb
  },
  data() {
    return {
      projects: [],
      searchInput: ""
    };
  },
  methods: {
    searchTechniques() {
      this.projects.forEach(proj => {
        proj.selected =
          this.searchInput && proj.searchString.includes(this.searchInput);
      });
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: "draft",
        starts_with: "projects"
      })
      .then(res => {
        return {
          projects: res.data.stories.map(pr => {
            return {
              id: pr.slug,
              date: pr.content.date,
              description: pr.content.description,
              title: pr.content.title,
              link: pr.content.link,
              link_code: pr.content.link_code,
              thumbnailImage: pr.content.thumbnail,
              techniques: pr.content.techniques.map(t => t.name),
              searchString: pr.content.techniques.map(t => t.name).join("-")
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

<style scoped>
.input-wrap {
  margin-top: 4rem;
  height: 3rem;
}

::selection {
  background: #ffb7b7;
  /* WebKit/Blink Browsers */
}

::-moz-selection {
  background: #ffb7b7;
  /* Gecko Browsers */
}

input {
  caret-color: red;

  font-size: 3rem;
  height: 4.5rem;
  outline: none;
  padding-left: 15px;
  padding-top: 3px;
  background: #c5f0a4;
  border: none;
  padding-bottom: 5px;
  border-bottom: 4px solid gray;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.thumbs {
  width: 33.3333%;
  /* height: 25rem; */
  overflow: hidden;
  float: left;
  padding: 2rem;
}

.selected {
  background: red;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
