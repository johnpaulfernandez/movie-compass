<template>
  <section>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="movie in movies.results" :key="movie.id" class="swiper-slide">
          <img
            :src="BASE_IMAGE_URL + movie.backdrop_path"
            :alt="movie.title"
            class="parallax-poster"
          >

          <div
            class="row h-100 justify-content-between align-items-center text-light ml-auto px-4 parallax-overlay"
            style="font-size: 4em"
          >
            <font-awesome-icon icon="chevron-left" class="d-none d-sm-block"/>
            <font-awesome-icon icon="chevron-right" class="d-none d-sm-block"/>
          </div>
          <div class="row text-light bg-gradient ml-auto parallax-overlay">
            <div class="col-lg-8 px-5 p-2">
              <h1 class="text-uppercase">{{ movie.title }}</h1>
              <h5>1:30 | PG | Drama</h5>
              <h5 class="lead">{{ movie.overview }}</h5>
            </div>
            <div class="col-lg-4 text-center">
              <font-awesome-icon
                id="icon"
                icon="thumbs-down"
                class="my-xl-4 my-sm-4 my-xs-5 mr-5 my-3 fa-flip-horizontal"
              />
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
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      }
    };
  },
  computed: {
    BASE_IMAGE_URL: () => 'https://image.tmdb.org/t/p/original/'
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

.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    // font-size: 38px;
    // font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>
