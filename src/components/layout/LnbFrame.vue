<template>
  <!-- /// LNB -->
  <div class="lnb-wrap">
    <div v-for="item in menuList" :key="item.mnSn" class="lnb-area" :class="item.selFlg ? 'active' : ''">
      <h3 :class="item.selFlg ? 'active' : ''">{{item.mnNm}}</h3>
      <h4 v-for="item2 in item.subMenus" :key="item2.mnSn" v-on:click="moveTo(item2)" :class="item2.selFlg ? 'active' : ''"><span>{{item2.mnNm}}</span></h4>
    </div>
  </div>
</template>

<script>
/// 페이지별 js
import _ from 'lodash';

export default {
  props: ['menuList'],
  data() {
    return {
      // showH3 : false,
    }
  },  
  mounted() {
    let self = this;

    this.$nextTick(() => {
      /// 화면 다 그리고 로딩영역 숨기기
      self.$emit('loading', false);
    });
  },
  methods: {
    moveTo: function(item) {
      /// window.location.href || window.open이 아닌 this.$router를 사용해야 '뒤로가기'로 꼬이는 일이 발생하지 X
      if (item.mnParentSn == null) {
        this.$router.push(item.mnUrl);
      } else {
        this.$router.push(_.find(this.menuList, { mnSn: item.mnParentSn }).mnUrl + item.mnUrl);
      }

      this.$emit('change-lnb', this.menuList);
    }
  }
}
</script>