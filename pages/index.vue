<template>
  <section class="container">
    <Geolocation />
  </section>
</template>

<script>
import Geolocation from "../components/Geolocation.vue";

export default {
  components: {
    Geolocation
  }
};
</script>

<style lang="scss">
@import './styles/custom-bootstrap.scss';
</style>
