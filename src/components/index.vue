<template>
<div>
  <Header/>
  <div class="landing-block bg-light">
    <div class="container px-3">

      <div class="col-md-10 col-lg-8 col-xl-7 text-center p-0 mx-auto">
        <h1 class="display-4 font-secondary font-weight-semibold">
          Shampoo's pick
        </h1>
        <!-- <router-link :to="{name: 'header'}">header</router-link> -->
        <div class="lead text-muted pb-3 mt-4 mb-5">
          Lorem ipsum dolor sit amet, ad eam consul vituperata. Cum assum inimicus an, his ne liber aeterno debitis. Te his iudico tollit efficiendi.
        </div>
      </div>

      <div class="row text-center">
        <div class="col-sm-6 col-lg-4 p-4">
          <img src="@/assets/img2/avatars/1.png" class="ui-w-120 rounded-circle mb-4" alt>
          <h5 class="font-weight-bold mb-2">Mike Greene</h5>
          <div class="text-light small mb-3">Creative director</div>
          <div class="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum maximus lectus eget auctor.
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 p-4">
          <img src="@/assets/img2/avatars/2.png" class="ui-w-120 rounded-circle mb-4" alt>
          <h5 class="font-weight-bold mb-2">Leon Wilson</h5>
          <div class="text-light small mb-3">Curtomer support</div>
          <div class="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum maximus lectus eget auctor.
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 p-4">
          <img src="@/assets/img2/avatars/3.png" class="ui-w-120 rounded-circle mb-4" alt>
          <h5 class="font-weight-bold mb-2">Allie Rodriguez</h5>
          <div class="text-light small mb-3">CEO &amp; Design</div>
          <div class="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum maximus lectus eget auctor.
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 p-4">
          <img src="@/assets/img2/avatars/4.png" class="ui-w-120 rounded-circle mb-4" alt>
          <h5 class="font-weight-bold mb-2">Kenneth Frazier</h5>
          <div class="text-light small mb-3">Senior engineer</div>
          <div class="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum maximus lectus eget auctor.
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 p-4">
          <img src="@/assets/img2/avatars/5.png" class="ui-w-120 rounded-circle mb-4" alt>
          <h5 class="font-weight-bold mb-2">Nellie Maxwell</h5>
          <div class="text-light small mb-3">Financial director</div>
          <div class="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum maximus lectus eget auctor.
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 p-4">
          <img src="@/assets/img2/avatars/6.png" class="ui-w-120 rounded-circle mb-4" alt>
          <h5 class="font-weight-bold mb-2">Mae Gibson</h5>
          <div class="text-light small mb-3">UI/UX design</div>
          <div class="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum maximus lectus eget auctor.
          </div>
        </div>
      </div>

    </div>
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