<template>
  <div>
    <Header/>
    <div class="position-relative pt-5 pb-4">
      <div class="portfolio-image" style="z-index: -1;"></div>
      <div class="align-items-end py-5 px-4 px-md-5">
        <div class="font-secondary py-md-4 py-xl-5 mx-lg-5">
          <div class="portfolio-caption text-white font-weight-semibold"><div class="text-tiny font-weight-light">IT ALWAYS SEEMS<br>IMPOSSIBLE UNTIL<br>IT'S DONE</div></div>
        </div>
      </div>
    </div>
    <div class="container px-3 my-4">
      <h1 class="mb-4">
        TWICE
      </h1>
      <div class="flex">
        <div class="flex-box-1" style="flex-basis: 45%;">
          <div class="small" style="font-size: 15px;">
            <p>올해 2월 스페셜 앨범 [KNOCK KNOCK]으로 팬들의 마음을 두드렸던 트와이스가 드디어 박진영의 곡으로 5월 메이퀸 등극을 예고하며 3개월만에 팬들 앞에 미니 4집 [SIGNAL]을 선보인다. '우아하게' – 'CHEER UP' – 'TT' – 'KNOCK KNOCK'까지 4연속 메가 히트와 더불어 K-POP 걸그룹 최다 유튜브 조회수, 1억뷰 돌파, 30만장에 육박하는 음반 판매고, 첫 콘서트 실시간 매진 등 '기록 제조기'로서의 명성에 모자람이 없는 성적들을 만들어 온 트와이스가 이번에는 또 어떤 성과를 만들어 낼지 네이버 뮤직 스페셜에서 단독으로 공개되는 B컷을 감상하며 기대해보자.</p>          
          </div>
          <div class="flex" style="margin-top: 15px;">
            <button type="submit" class="button-submit app" style="flex-basis: 50%;">프로젝트 후원하기</button>
            <button type="submit" class="button-submit app" style="flex-basis: 50%; margin-left: 1px;">좋아요</button>
          </div>
        </div>
          <div class="overview_cnt" style="flex-basis: 45%; margin-left: 100px;">
            <table>
              <tr>
                <th scope="row">모인 금액</th>
                <td><span class="h1 mb4">7,777,700</span>원</td>
              </tr>
              <tr>
                <th scope="row">남은 기간</th>
                <td><span class="h1 mb4">24</span>일</td>
              </tr><tr>
                <th scope="row">후원자</th>
                <td><span class="h1 mb4">789</span>명</td>
              </tr><tr>
                <th scope="row">좋아요</th>
                <td><span class="h1 mb4">123,456</span>개</td>
              </tr>
            </table>
            <div class="layout-guide-box">
              <i class="fa fa-lightbulb-o" />
              <span> 목표금액인 777,777,000원이 모이면 데뷔에 가까워집니다. <br>후원자 모두에게는 매주 관련 뉴스레터를 보내드립니다.</span>
            </div>
          </div>
      </div>
    <!-- <div class="container portfolio-block-padding-t px-3">
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
    </div> -->
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
  .portfolio-image {
    background-image: url('../assets/img2/bg/25.jpg');
  }
</style>
