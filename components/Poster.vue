<template>
  <section>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="movie in movies.results" :key="movie.id" class="swiper-slide">
          <img :src="BASE_IMAGE_URL + movie.backdrop_path" :alt="movie.title" class="parallax-poster">

          <div slot="button-prev" class="swiper-button-prev d-none d-sm-block ml-4 swiper-button-white"/>
          <div slot="button-next" class="swiper-button-next d-none d-sm-block mr-4 swiper-button-white"/>

          <div class="row text-light bg-gradient ml-auto parallax-overlay">
            <div class="col-lg-8 px-5 p-2">
              <h1 class="text-uppercase">{{ movie.title }}</h1>
              <h5>1:30 | PG | Drama</h5>
              <h5 class="lead">{{ movie.overview }}</h5>
            </div>
            <div class="col-lg-4 text-center">
              <font-awesome-icon id="icon" icon="thumbs-down" class="my-xl-4 my-sm-4 my-xs-5 mr-5 my-3 fa-flip-horizontal"/>
              <font-awesome-icon id="icon" icon="thumbs-up" class="m-xl-5 m-sm-5 mx-xs-5 my-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"/>
  </section>
</template>

<script>
export default {
  props: {
    movies: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      swiperOption: {
        speed: 800,
        loop: false,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    BASE_IMAGE_URL: () => "https://image.tmdb.org/t/p/original/"
  }
};
</script>

<style lang="scss">
.parallax-poster {
  height: 90vh;
  position: relative;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-overlay {
  width: 100%;
  position: absolute;
  bottom: 0px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-gradient {
  opacity: 0.9;
  background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgb(8, 8, 8));
  position: absolute;
  width: 100%;
}
</style>
