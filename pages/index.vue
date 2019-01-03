<template>
  <section class="container-fluid">
    <Navbar />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import './styles/custom-bootstrap.scss';
</style>
