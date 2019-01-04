<template>
  <section>
    <div class="parallax-home mb-4">
      <div class="parallax-overlay text-white float-left">
        <h1 class="font-weight-bold text-uppercase">Movie Title</h1>
        <h5
          class="text-light"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum doloribus dolorem eligendi eum sapiente dignissimos corporis at perferendis non numquam, aliquam, hic provident libero iusto.</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.parallax-home {
  background-image: url('../static/cover.jpg');

  height: 95vh;

  padding-top: 15vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-overlay {
  width: 60vw;
  margin: 50vh 5vh;
  opacity: 0.9;
}
</style>
