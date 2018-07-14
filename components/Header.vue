<template>
  <header>
    <ul class="nav-links">
      <nuxt-link to="/" tag="li" class="nav-link" exact>
        <a>Home</a>
      </nuxt-link>
      <nuxt-link to="/about" tag="li" class="nav-link" exact>
        <a>About</a>
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
  export default {};
  //#faffb8
  //#c5f0a4
  //#35b0ab
  //#226b80

</script>


<style scoped>
  header {
    background: #35b0ab;
    color: #c5f0a4;
    height: 4rem;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    margin: 1.2rem;
    display: inline;
  }

  a:hover {
    border-bottom: 3px solid #c5f0a4;
  }

  .nuxt-link-active {
    border-bottom: 3px solid #226b80;
  }

</style>
