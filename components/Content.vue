<template>
  <section class="container pt-3 content-main">
    <b-tabs id="content-navbar" pills card class="justify-content-center px-5">
      <b-tab title="Showtimes" class="flex-fill">
        <Details/>
      </b-tab>
      <b-tab title="Details" active>
        <Details/>
      </b-tab>
      <b-tab title="Trailers">
        <Details/>
      </b-tab>
      <b-tab title="More...">
        <Details/>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
import Details from "./Details.vue";

export default {
  components: {
    Details
  }
};
</script>

<style lang="scss">
</style>
