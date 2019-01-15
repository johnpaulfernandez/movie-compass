<template>
  <section class="container-fluid">
    <Poster :movies="movies"/>
    <div style="height: 1000px"/>
  </section>
</template>

<script>
import axios from 'axios';
import Poster from '../components/Poster.vue';

export default {
  components: {
    Poster
  },
  data() {
    return {
      movies: null
    };
  },
  asyncData() {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=&language=en-US&page=1&append_to_response=release_dates,details`
      )
      .then(res => ({
        movies: res.data
      }))
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style lang="scss">
</style>
