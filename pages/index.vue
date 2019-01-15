<template>
  <section class="container-fluid">
    <Poster/>
    <Content/>
  </section>
</template>

<script>
import Poster from '../components/Poster.vue';
import Content from '../components/Content.vue';

export default {
  components: {
    Poster,
    Content
  }
};
</script>

<style lang="scss">
</style>
