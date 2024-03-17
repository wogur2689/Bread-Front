<template>
  <div>
    <!-- /// 로딩 -->
    <loading :show-flg="showFlg"></loading>
    <!-- /// GNB -->
    <gnb-frame v-if="confirm.gnb" :menu-list="menuList" v-on:change-lnb="changeLnb"></gnb-frame>
    <!-- /// LNB -->
    <section id="viewBox">
      <lnb-frame v-if="confirm.lnb" :menu-list="menuList" :sel-gnb="selGnb" v-on:change-lnb="changeLnb" v-on:loading="loading"></lnb-frame>
      <!-- /// 링크에 따라 변경되는 CONTENT -->
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
import lnbFrame from '@/components/layout/LnbFrame';
import _ from "lodash";

export default {
  /// 위에서 선언한 컴포넌트
  components: { loading, gnbFrame, lnbFrame },
  data() {
    return {
      showFlg: true,
      confirm: {
        gnb: false,
        lnb: false
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
        "mnUrl": "/recruit",
        "mnStep": 1,
        "mnParentSn": null,
        "mnOrd": 1,
        "mnNm": "상품",
        "mnUseSt": "USE",
        "mnInsId": "DB",
        "mnInsDt": "2022-10-03T12:36:56.673+00:00",
        "mnUpdId": null,
        "mnUpdDt": null,
        "selFlg": false,
        "subMenus": null
      }, {
        "mnSn": 2,
        "mnUrl": "/hr",
        "mnStep": 1,
        "mnParentSn": null,
        "mnOrd": 2,
        "mnNm": "장바구니",
        "mnUseSt": "USE",
        "mnInsId": "DB",
        "mnInsDt": "2022-10-03T12:36:56.673+00:00",
        "mnUpdId": null,
        "mnUpdDt": null,
        "selFlg": false,
        "subMenus": null
      }, {
        "mnSn": 3,
        "mnUrl": "/group",
        "mnStep": 1,
        "mnParentSn": null,
        "mnOrd": 3,
        "mnNm": "이벤트",
        "mnUseSt": "USE",
        "mnInsId": "DB",
        "mnInsDt": "2022-10-03T12:36:56.673+00:00",
        "mnUpdId": null,
        "mnUpdDt": null,
        "selFlg": false,
        "subMenus": null
      }, {
        "mnSn": 11,
        "mnUrl": "/ability",
        "mnStep": 2,
        "mnParentSn": 2,
        "mnOrd": 4,
        "mnNm": "역량관리",
        "mnUseSt": "USE",
        "mnInsId": "DB",
        "mnInsDt": "2022-10-03T12:48:23.493+00:00",
        "mnUpdId": null,
        "mnUpdDt": null,
        "selFlg": false,
        "subMenus": null
      }];
      this.menuList = _.filter(testData, { mnStep: 1 });
      _.forEach(this.menuList, function(o) {
        o.subMenus = _.filter(testData, { mnParentSn: o.mnSn });
      });
      this.confirm.gnb = true;

      /* Dev */
        //try {
        // const res = await this.$axios.post('/menu/list');
        // if (res.data.rCode == '0000') {
        //   /// 정상일 경우 메뉴 표시
        //   this.menuList = _.filter(res.data.rData, { mnStep: 1 });
        //   _.forEach(this.menuList, function(o) {
        //     o.subMenus = _.filter(res.data.rData, { mnParentSn: o.mnSn });
        //   });
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
    // changeLnb: function(list, val) {
    changeLnb: function(list) {
      this.confirm.lnb = false;
      this.menuList = list;

      // let mnSn = 0;
      /// 경로에서 /${step1}/${step2}로 구분
      let winPath = window.location.pathname.split('/');
      /// GNB정보
      _.forEach(this.menuList, function(o) {
        if (o.mnUrl == '/' + winPath[1]) {
          /// ${step1}과 같은 GNB 색 변경
          // mnSn = o.mnSn;
          o.selFlg = true;
          if (winPath.length > 2) {
            /// url이 /${step1}/${step2}일 경우 ${step2}와 LNB url 매칭
            _.forEach(o.subMenus, function(o2) {
              if (o2.mnUrl == '/' + winPath[2]) {
                /// ${step2}과 같은 LNB 색 변경
                o2.selFlg = true;
              } else {
                o2.selFlg = false;
              }
            });
          }
        } else {
          o.selFlg = false;
          _.forEach(o.subMenus, function(o2) {
            o2.selFlg = false;
          });
        }
      });

      this.confirm.lnb = true;
    },

    loading: function(flg) {
      this.showFlg = flg;
    },
  }
};
</script>