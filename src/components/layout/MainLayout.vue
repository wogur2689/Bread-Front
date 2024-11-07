<template>
  <div>
    <!-- 로딩 -->
    <loading :show-flg="showFlg"></loading>
    <!-- GNB -->
    <gnb-frame v-if="confirm.gnb" :menu-list="menuList" v-on:change-gnb="changeGnb" v-on:loading="loading"></gnb-frame>
    <section id="viewBox">
      <router-view class="content-wrap"></router-view>
    </section>
    <footer>
      <p>&copy; hyeok. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
/// 호출할 컴포넌트 선언
import loading from '@/components/layout/LoadingWrapper';
import gnbFrame from '@/components/layout/GnbFrame';
import _ from "lodash";

export default {
  /// 위에서 선언한 컴포넌트
  components: { loading, gnbFrame},
  data() {
    return {
      showFlg: true,
      confirm: {
        gnb: false
      },
      menuList: []
    }
  },
  created () {
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      this.confirm.gnb = false;

      /* Pub */
      let testData = [{
        "mnSn": 1,
        "mnStep": 1,
        "mnUrl": "/home",
        "mnNm": "home",
      }, {
        "mnSn": 2,
        "mnStep": 1,
        "mnUrl": "/login",
        "mnNm": "login",
      }, {
        "mnSn": 3,
        "mnStep": 1,
        "mnUrl": "/market",
        "mnNm": "market",
      }, {
        "mnSn": 4,
        "mnStep": 1,
        "mnUrl": "/talk",
        "mnNm": "talk",
      }, {
        "mnSn": 5,
        "mnStep": 1,
        "mnUrl": "/myPage",
        "mnNm": "myPage",
      }];
      this.menuList = _.filter(testData, { mnStep: 1 });
      this.confirm.gnb = true;

      /* Dev */
        //try {
        // const res = await this.$axios.post('/api/menu');
        // if (res.data.rCode == '0000') {
        //   /// 정상일 경우 메뉴 표시
        //   this.menuList = _.filter(res.data.rData, { mnStep: 1 });
        //   this.confirm.gnb = true;
        // } else {
        //   /// 그 외
        //   alert(res.data.rMsg);
        //   return;
        // }
      // } catch (error) {
      //   /// 에러
      //   alert(error);
      //   return;
      // }
    },
    /// GNB
    changeGnb: function(list) {
      this.menuList = list;
      let winPath = window.location.pathname.split('/');
      /// GNB정보
      _.forEach(this.menuList, function(o) {
        if (o.mnUrl == '/' + winPath[1]) {
          ///GNB 색 변경
          o.selFlg = true;
        } else {
          o.selFlg = false;
        }
      });

      this.confirm.gnb = true;
    },

    loading: function(flg) {
      this.showFlg = flg;
    },

    moveMypage() {
        this.$router.push('/mypage');
    }
  }
};
</script>