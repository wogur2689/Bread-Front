<template>
  <!-- /// v-if 사용 시 transition을 통해 fade 기능 사용 가능
    /// name은 common.css의 설명 참고
  -->
  <Transition name="loading">
    <div v-if="showFlg" class="loading-wrap">
      <div class="preloader">
        <div class="loading-container">
          <div class="loading"></div>
          <div id="loading-text">
            <div>
              <img src="@/assets/logo.svg" id="loaderimg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  /// 부모 컴포넌트에서 받은 변수
  props: ['showFlg']
}
</script>