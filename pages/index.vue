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
    return {
      movieDbMovies: null,
      gnoteMovies: null,
      movies: null
    };
  },
  asyncData() {
    return axios
      .all([
        axios.get(
          `${movieDbNowPlayingUrl}?api_key=${movieDbApiKey}&language=en-US&page=1`
        ),
        axios.get(
          `${gnoteShowtimesUrl}?startDate=${today}&zip=${zipCode}&api_key=${gnoteApiKey}`
        )
      ])
      .then(
        axios.spread((movieDbRes, graceNoteRes) => ({
          movieDbMovies: movieDbRes.data,
          gnoteMovies: graceNoteRes.data
        }))
      )
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    buildMovies() {
      // this.movies = this.movieDbMovies;
      return this.movies;
    }
  }
};
</script>

<style lang="scss">
</style>
