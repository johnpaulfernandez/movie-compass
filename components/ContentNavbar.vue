<template>
  <section class="container-fluid">
    <b-nav justified tabs class="text-light justify-content-center mx-auto col-lg-8 px-5 mb-2">
      <b-nav-item>Details</b-nav-item>
      <b-nav-item active>Showtimes</b-nav-item>
      <b-nav-item>Trailers</b-nav-item>
      <b-nav-item>More...</b-nav-item>
    </b-nav>
  </section>
</template>

<script>
export default {};
</script>

<style>
.nav-item {
  background-color: transparent;
}

.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border: none;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #fff;
  background-color: #660011;
  border: none;
}
</style>
