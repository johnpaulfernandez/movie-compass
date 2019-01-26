<template>
  <section class="container-fluid pt-3">
    <b-card no-body>
      <b-nav v-b-scrollspy:nav-scroller slot="header" pills class="px-5">
        <b-nav-item v-scroll-to="{ el: '#showtimes-section', duration: 1000}" href="#showtimes-section" class="active" @click="scrollIntoView">SHOWTIMES</b-nav-item>
        <b-nav-item v-scroll-to="{ el: '#details-section', duration: 3000}" href="#details-section" @click="scrollIntoView">DETAILS</b-nav-item>
        <b-nav-item v-scroll-to="{ el: '#trailers-section', duration: 4000}" href="#trailers-section" @click="scrollIntoView">TRAILERS</b-nav-item>
        <b-nav-item v-scroll-to="{ el: '#reviews-section', duration: 5000}" href="#reviews-section" @click="scrollIntoView">REVIEWS</b-nav-item>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; overflow-y:scroll; overflow: hidden">
        <div id="showtimes-section" class="text-center text-light py-5">Showtimes</div>
        <Details id="details-section"/>
        <div id="trailers-section" class="text-center text-light py-5">Trailers</div>
        <div id="reviews-section" class="text-center text-light py-5">Reviews</div>
      </b-card-body>
    </b-card>
    <div class="text-center mb-3">
      <font-awesome-icon v-scroll-to="{ el: 'img', duration: 500}" id="icon" icon="chevron-circle-up" style="font-size: 3em"/>
    </div>
  </section>
</template>

<script>
import Details from "./Details.vue";

export default {
  components: {
    Details
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    }
  }
};
</script>

<style lang="scss">
#nav-scroller {
  background-color: #141210;
}
</style>
