<template>
  <section class="container-fluid pt-3 content-main">
    <ContentNavbar/>
  </section>
</template>

<script>
import ContentNavbar from './ContentNavbar.vue';

export default {
  components: {
    ContentNavbar
  }
};
</script>

<style lang="scss">
.content-main {
  height: 90vh;

  background-color: #141210;
}
</style>
