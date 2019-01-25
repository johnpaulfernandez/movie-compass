<template>
  <section class="container-fluid">
    <Poster :movies="movieDbMovies"/>
    <Content/>
  </section>
</template>

<script>
import axios from "axios";
import Poster from "../components/Poster.vue";
import Content from "../components/Content.vue";

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
    Poster,
    Content
  },
  data() {
    return {
      movieDbMovies: null
    };
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

          for (let i = 0; i < movieDbResFiltered.length; i += 1) {
            const gnIdx = graceNoteRes.data.findIndex(gnoteMovie => gnoteMovie.title === movieDbResFiltered[i].title);

            if (gnIdx >= 0) {
              movieDbResFiltered[i].showtimes = graceNoteRes.data[gnIdx].showtimes;
              movieDbResFiltered[i].genre = graceNoteRes.data[gnIdx].genres;
              movieDbResFiltered[i].runtime = graceNoteRes.data[gnIdx].runTime;
              movieDbResFiltered[i].ratings = graceNoteRes.data[gnIdx].ratings;
              movieDbResFiltered[i].shortDescription = graceNoteRes.data[gnIdx].shortDescription;
            }
          }

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
