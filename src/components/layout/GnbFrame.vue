<template>
  <!-- /// GNB -->
  <div class="gnb-wrap">
    <nav id="gnb">
      <!-- /// GNB 메뉴 정보 -->
      <h3 v-for="item in menuList" :key="item.mnSn" v-on:click="setGnb(item)" :class="item.selFlg ? 'active' : ''">{{item.mnNm}}</h3>
    </nav>
  </div>
</template>

<script>
/// 페이지별 js
import _ from 'lodash';

export default {
  props: ['menuList'],
  data() {
    return {
      isExpand:false,
      isShow: true,
    }
  },
  mounted() {
    let self = this;

    this.$nextTick(() => {
      self.$emit('loading', false);
    });
  },
  methods: {
    /// GNB 클릭 -> GNB default 경로로 변경
    setGnb: function(item) {
      this.$router.push(item.mnUrl);
    },

    changeGnb: function() {
      this.$emit('change-gnb', this.menuList);
    },

    moveTo: function(item) {
      /// window.location.href || window.open이 아닌 this.$router를 사용해야 '뒤로가기'로 꼬이는 일이 발생하지 X
      if (item.mnParentSn == null) {
        this.$router.push(item.mnUrl);
      } else {
        this.$router.push(_.find(this.menuList, { mnSn: item.mnParentSn }).mnUrl + item.mnUrl);
      }

      this.$emit('change-gnb', this.menuList);
    },

    //dropdown show/hide, toggle 
    dropShow: function () {
      this.isShow = !this.isShow;
    },  

    toggleExpand: function () {
      this.isExpand = !this.isExpand;
    },

    /// 로그인 페이지로 이동
    logout: function() {
      this.$router.push('/');
    },

    // Modal
    showModal() {
      this.$refs.psModal.draggable({
        handle: ".modal-header",
        cursor: 'move',
      });
    }
  }
}
</script>