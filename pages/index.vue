<template>
  <section class="container-fluid">
    <Poster :movies="movieDbMovies"/>
    <div style="height: 1000px"/>
  </section>
</template>

<script>
import axios from "axios";
import Poster from "../components/Poster.vue";

const gnoteApiKey = process.env.VUE_APP_GRACENOTE_API_KEY;
const gnoteBaseUrl = "http://data.tmsapi.com/v1.1";
const gnoteShowtimesUrl = `${gnoteBaseUrl}/movies/showings`;

const movieDbApiKey = process.env.VUE_APP_MOVIEDB_API_KEY;
const movieDbBaseUrl = "https://api.themoviedb.org/3";
const movieDbNowPlayingUrl = `${movieDbBaseUrl}/movie/now_playing`;

const zipCode = "91107";
const d = new Date();
const today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

export default {
  components: {
    Poster
  },
  data() {
    return {};
  },
  asyncData() {
    return axios
      .all([
        axios.get(`${movieDbNowPlayingUrl}?api_key=${movieDbApiKey}&language=en-US&page=1&region=US`),
        axios.get(`${gnoteShowtimesUrl}?startDate=${today}&zip=${zipCode}&api_key=${gnoteApiKey}`)
      ])
      .then(
        axios.spread((movieDbRes, graceNoteRes) => {
          const movieDbResFiltered = movieDbRes.data.results.filter(mdbMovie =>
            graceNoteRes.data.some(gnoteMovie => gnoteMovie.title === mdbMovie.title)
          );

          return {
            movieDbMovies: movieDbResFiltered
          };
        })
      )
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style lang="scss">
</style>
