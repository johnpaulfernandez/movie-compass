<template>
  <section class="container-fluid pt-3 content-main">
    <ContentNavbar/>
    <Details/>
  </section>
</template>

<script>
import ContentNavbar from "./ContentNavbar.vue";
import Details from "./Details.vue";

export default {
  components: {
    ContentNavbar,
    Details
  }
};
</script>

<style lang="scss">
</style>
