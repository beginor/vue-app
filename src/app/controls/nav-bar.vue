<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="d-inline-block align-text-bottom me-1" src="vue.svg"
             height="20" width="20" alt="Vue app">
        Vue App
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav me-auto">
          <router-link class="nav-link" active-class="active" to="/home">
            Home
          </router-link>
          <router-link class="nav-link" active-class="active" to="/about">
            About
          </router-link>
          <router-link class="nav-link" active-class="active" to="/timer">
            Timer
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import './src/variables';

.navbar {
  @include box-shadow(0 0 4px 0 $dark);

  .navbar-brand {
    text-shadow: 0 0 1px $light;
  }

  .navbar-nav {
    @include media-breakpoint-up(md) {
      .nav-link.active {
        border-bottom: .25rem solid $navbar-dark-active-color;
        margin-bottom: -0.5rem;
      }
    }
  }
}
</style>
