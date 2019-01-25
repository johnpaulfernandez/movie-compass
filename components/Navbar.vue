<template>
  <b-navbar v-scroll="handleScroll" toggleable="md" type="dark" class="fixed-top px-sm-5">
    <b-navbar-toggle target="nav_collapse"/>

    <nuxt-link to="/" class="navbar-brand">Movie Compass</nuxt-link>

    <b-collapse id="nav_collapse" class="ml-md-5" is-nav>
      <b-navbar-nav>
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        <nuxt-link to="/listings" class="nav-link">All Movies</nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 550) {
        el.setAttribute("style", "background-color: #660011; opacity: 0.9; transition: background-color 200ms linear");
      } else {
        el.setAttribute("style", "background-color: none; transition: background-color 200ms linear");
      }
    }
  }
};
</script>

<style>
</style>
