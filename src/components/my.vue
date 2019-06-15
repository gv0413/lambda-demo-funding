<template>
  <div>
    <Header/>
    <div class="position-relative pt-5 pb-4">
      <div class="portfolio-image" style="z-index: -1; background-image: url(assets/img/bg/25.jpg);"></div>
      <div class="align-items-end py-5 px-4 px-md-5">
        <div class="font-secondary py-md-4 py-xl-5 mx-lg-5">
          <div class="portfolio-caption text-white font-weight-semibold"><div class="h1 mb4">Shampoo의 지갑</div></div>
          <div class="portfolio-caption text-white font-weight-semibold">
            1000 <span class="h1 mb4">RWT</span>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-block container px-3">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="small mb-4">
            <div class="tit_area">
              <div class="text-lighter">&nbsp;&nbsp;</div>
              <h2>History</h2>
            </div>
          </div>
        </div>
          <table class="tbl">
            <colgroup>
            <col style="width:20%">
            <col style="width:40%">
            <col style="width:15%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">일시</th>
              <th scope="col">항목</th>
              <th scope="col">세부사항</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">일시</td>
              <td><time datetime="">팬미팅 선예매</time></td>
              <td>
                <time datetime="">
                  -500 <span class="h6 mb4">RWT</span>
                </time>
              </td>
            </tr>
            <tr>
              <td scope="row">일시</td>
              <td><time datetime="">콘서트 선예매</time></td>
              <td>
                <time datetime="">
                  -400 <span class="h6 mb4">RWT</span>
                </time>
              </td>
            </tr>
            <tr>
              <td scope="row">일시</td>
              <td><time datetime="">후원</time></td>
              <td>
                <time datetime="">
                  +100 <span class="h6 mb4">RWT</span>
                </time>
              </td>
            </tr>
          </tbody>
          </table>
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

<style scoped>
  .position-relative{
    background-color: #1B2733 !important;
  }
  .font-secondary {
    text-align: center !important;
  }
  .pt-5 {
    padding-top: 5rem !important;
  }
  .small {
    margin-top: 1.5rem !important;
  }
</style>
