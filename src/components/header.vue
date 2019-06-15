<template>
  <nav class="landing-navbar navbar navbar-expand-lg navbar-dark fixed-top pt-lg-4">
    <div class="container-fluid px-3">
      <router-link :to="{ name: 'home', params: {} }" class="btn-home">Luniverse</router-link>
      <router-link class="navbar-brand text-big font-weight-bolder line-height-1 text-expanded py-3" :to="{ name: 'home' }">FUNDING</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#landing-navbar-collapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="landing-navbar-collapse">
        <div class="navbar-nav align-items-lg-center ml-lg-4">
          <router-link class="anchor-link nav-item nav-link" :to="{ name: 'detail' }">Detail</router-link>
          <router-link class="anchor-link nav-item nav-link" :to="{ name: 'product' }">Product</router-link>
        </div>
        <div class="navbar-nav align-items-lg-center ml-auto">
          <div class="nav-item py-2 py-lg-0 ml-lg-4">
            <router-link class="btn btn-outline-white btn-round borderless" :to="{ name: 'my' }">My Page</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar.navbar-dark {
    background-color: #1366FF;
  }
  .anchor-link {
    padding-right: 1.5rem !important;
  }
  .landing-navbar{
    padding-top: .5rem !important;
  }
</style>
