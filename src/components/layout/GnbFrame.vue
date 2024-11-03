<template>
  <!-- /// GNB -->
  <div class="gnb-wrap">
    <h1>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo"/>
      </div>
      <span>hyeok's bakery!</span>
    </h1>
    <nav id="gnb">
      <!-- /// GNB 메뉴 정보 -->
      <h3 v-for="item in menuList" :key="item.mnSn" v-on:click="setGnb(item)" :class="item.selFlg ? 'active' : ''">{{item.mnNm}}</h3>
      <!-- /// 로그아웃 -->
    </nav>
    <nav id="unb" class="loginInfo">
      <button type="button" @click="dropShow" @click.prevent="toggleExpand">
        <div class="user-icon"></div>
        <span class="ml-1">user</span>
        <div class="icon" v-if="isExpand"></div>
        <div class="icon iconRow" v-if="!isExpand"></div>
      </button>
      
      <!-- v-on:click="logout" -->
    </nav>
    <div class="clear"></div>
  </div>

  <div class="dd-menu" v-show="!isShow">
    <ul class="unb-list">
      <li data-bs-toggle="modal" data-bs-target="#passwordModal" @click="showModal">비밀번호 변경</li>
      <li v-on:click="logout">로그아웃</li>
    </ul>
  </div>


  <div class="modal fade" ref="psModal" id="passwordModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="passwordModalLabel" aria-hidden="true" no-close-on-esc="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">비밀번호 변경</h5>
          <button type="button" class="close button" data-bs-dismiss="modal" aria-label="Close">닫기</button>
        </div>
        <form>
          <div class="modal-body">
            <div class="modal-body-content">
              <p class="mbc-title">새로운 비밀번호를 입력해주세요</p>
              <br />
              <p class="mbc-info">영문, 숫자, 특수문자를 조합하여 8~20자 이내로 설정해주세요.</p>
              
              
              <table>
                <tbody>
                  <tr>
                    <th>
                      <label class="required" for="newPass">새 비밀번호</label>
                    </th>
                    <td>
                      <input id="newPadd" type="password" placeholder="비밀번호를 입력해주세요." />
                      <span class="invalid-text">잘못된 비밀번호입니다.</span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label class="required" for="newPass">새 비밀번호 확인</label>
                    </th>
                    <td>
                      <input id="newPadd" type="password" placeholder="비밀번호를 입력해주세요." />
                      <span class="invalid-text">비밀번호가 일치하지않습니다.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p class="mbc-info">비밀번호를 변경하면, 모든 기기/브라우저에서 로그아웃됩니다.</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="button button-primary mr-1">비밀번호 변경</button>
          </div>
        </form>
      </div>
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