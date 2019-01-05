<template>
  <section>
    <div class="parallax-home mb-4 d-flex flex-column">
      <div
        class="d-flex justify-content-between align-items-center text-light mx-4 my-auto"
        style="font-size: 6em"
      >
        <font-awesome-icon icon="chevron-left" class="d-none d-sm-block"/>
        <font-awesome-icon icon="chevron-right" class="d-none d-sm-block"/>
      </div>
      <div class="row text-light bg-gradient">
        <div class="col-lg-8 px-5 mb-2">
          <h1 class="text-uppercase">Bird Box</h1>
          <h5>1:30 | R | Drama</h5>
          <h5
            class="lead"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum doloribus dolorem eligendi eum sapiente dignissimos corporis at perferendis non numquam, aliquam, hic provident libero iusto.</h5>
        </div>
        <div class="col-lg-4 text-center">
          <font-awesome-icon
            id="icon"
            icon="thumbs-down"
            class="my-xl-4 my-sm-4 my-xs-5 mr-5 my-3 fa-flip-horizontal"
          />
          <font-awesome-icon id="icon" icon="thumbs-up" class="m-xl-5 m-sm-5 mx-xs-5 my-4"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.parallax-home {
  background-image: url('../static/cover_poster.jpg');

  height: 95vh;

  padding-top: 15vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-gradient {
  opacity: 0.9;
  background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgb(8, 8, 8));
}
</style>
