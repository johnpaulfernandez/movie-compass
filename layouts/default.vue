<template>
  <section class="container-fluid">
    <Navbar/>
    <nuxt/>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
@import "./styles/app.scss";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html {
  font-size: 1rem;
  background-color: $licorice;
}

@include media-breakpoint-up(xs) {
  html {
    font-size: 0.7rem;
  }
  h1,
  #icon {
    font-size: 2rem;
  }

  #nav-scroller,
  #showtimes-section,
  #details-section,
  #trailers-section,
  #reviews-section {
    height: 612px;
  }
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 0.9rem;
  }

  h1,
  #icon {
    font-size: 3rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 0.9rem;
  }

  h1,
  #icon {
    font-size: 3rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1rem;
  }

  h1 {
    font-size: 4rem;
  }

  #icon {
    font-size: 4rem;
  }

  #nav-scroller,
  #showtimes-section,
  #details-section,
  #trailers-section,
  #reviews-section {
    height: 773px;
  }
}
</style>
