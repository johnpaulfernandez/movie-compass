<template>
  <section class="container-fluid">
    <Navbar/>
    <nuxt/>
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

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
