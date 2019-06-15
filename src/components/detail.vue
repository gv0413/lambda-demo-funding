<template>
  <div>
    <Header/>
    <div class="position-relative pt-5 pb-4">
      <div class="portfolio-image" style="z-index: -1; background-image: url(assets/img/bg/25.jpg);"></div>
      <div class="align-items-end py-5 px-4 px-md-5">
        <div class="font-secondary py-md-4 py-xl-5 mx-lg-5">
          <div class="portfolio-caption text-white font-weight-semibold"><div class="text-tiny font-weight-light">IT ALWAYS SEEMS<br>IMPOSSIBLE UNTIL<br>IT'S DONE</div></div>
        </div>
      </div>
    </div>
    <div class="portfolio-block container px-3">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="small mb-4">
            <a href="#" class="text-muted font-weight-semibold">SOME COMPANY</a>
            <span class="text-lighter">&nbsp;\&nbsp;</span>
            <span class="text-lighter">2018</span>
          </div>
          <h1 class="mb-4">
            Contemporary branding and photography for a clothing brand
          </h1>
          <div class="small">
            <a href="#" class="text-dark">BRANDING</a>
            &nbsp; <span class="text-lighter">+</span> &nbsp;
            <a href="#" class="text-dark">PHOTOGRAPHY</a>
          </div>
        </div>
        <div class="col-lg-6 pt-5 pt-lg-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum mauris tellus, eu finibus tortor dictum vel.</p>
          <p>Cras id nisi et dui fermentum feugiat. Etiam luctus ligula eget augue feugiat rutrum. Nulla sed est in orci maximus mattis vitae vitae libero. Proin varius fermentum lobortis.</p>
          <p>Praesent tristique elementum nulla eget commodo. Pellentesque mattis sollicitudin leo et cursus.</p>
          <p class="mb-0">Nullam bibendum risus eu varius finibus. Maecenas nec ipsum blandit, gravida orci eu, molestie urna. Ut vel justo tempor, aliquet lacus at, condimentum purus.</p>
        </div>
      </div>
      <!-- Skills -->
    <div class="container portfolio-block-padding-t px-3">
      <h4 class="font-secondary text-center font-weight-semibold m-0">SKILLS</h4>

      <div class="row">
        <div class="col-md-6 px-md-5 mt-5">
          <div class="small mb-2">
            <div class="float-right">90%</div>
            PHOTOGRAPHY
          </div>
          <div class="progress rounded-0" style="height: 4px;">
            <div class="progress-bar bg-dark" style="width: 90%"></div>
          </div>
        </div>
        <div class="col-md-6 px-md-5 mt-5">
          <div class="small mb-2">
            <div class="float-right">75%</div>
            VIDEO
          </div>
          <div class="progress rounded-0" style="height: 4px;">
            <div class="progress-bar bg-dark" style="width: 75%"></div>
          </div>
        </div>
        <div class="col-md-6 px-md-5 mt-5">
          <div class="small mb-2">
            <div class="float-right">86%</div>
            BRANDING
          </div>
          <div class="progress rounded-0" style="height: 4px;">
            <div class="progress-bar bg-dark" style="width: 86%"></div>
          </div>
        </div>
        <div class="col-md-6 px-md-5 mt-5">
          <div class="small mb-2">
            <div class="float-right">80%</div>
            COMMINUCATION
          </div>
          <div class="progress rounded-0" style="height: 4px;">
            <div class="progress-bar bg-dark" style="width: 80%"></div>
          </div>
        </div>
        <div class="col-md-6 px-md-5 mt-5">
          <div class="small mb-2">
            <div class="float-right">100%</div>
            LIFE JOYING
          </div>
          <div class="progress rounded-0" style="height: 4px;">
            <div class="progress-bar bg-dark" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Skills -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header,
  },
}
</script>

<style scoped>
  body {
    overflow-y: scroll;
  }
</style>
