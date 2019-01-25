<template>
  <section class="container-fluid pt-3 content-main">
    <b-tabs id="content-navbar" pills card class="px-5">
      <b-tab title="SHOWTIMES">
        <Details/>
      </b-tab>
      <b-tab title="DETAILS" active>
        <Details/>
      </b-tab>
      <b-tab title="TRAILERS">
        <Details/>
      </b-tab>
      <b-tab title="REVIEWS">
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
