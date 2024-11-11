<template>
    <div class="login-bg">
      <div class="login-wrap">
        <div>
          <div class="text-center">
            <p class="login-info"><span>hyeok's bakery!</span></p>
            <p>로그인 후 이용하실 수 있습니다.</p>
          </div>
      
          <!-- /// 로그인 정보 -->
          <form id="login">
            <div class="form-group mt10">
              <label>아이디</label>
              <!-- /// focus해야 할 경우 ref 사용 -->
              <i class="i-id"></i>
              <input type="text" ref="txtId" class="form-control mt5" v-model.trim="usr.userId" placeholder="아이디"
                v-on:keyup.enter="login" />
            </div>
            <div class="form-group mt10">
              <label>비밀번호</label>
              <!-- /// input type이 password일 경우 반드시 autocomplete(자동 완성) 옵션 추가해야 함 -->
              <i class="i-pw"></i>
              <input type="password" ref="txtPwd" class="form-control mt5" v-model.trim="usr.pwd"
                placeholder="비밀번호" v-on:keyup.enter="login" autocomplete="on" />
            </div>
          </form>
          <button type="button" class="btn login-btn" v-on:click="login">로그인</button>
          <button type="button" class="btn login-btn" v-on:click="moveSignUp">회원가입</button>
          
          <div class="login-check">
            <input type="checkbox" id="id-save">
            <label for="id-save">아이디저장</label>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  /// 페이지별 js 정규화 검증
  import vd from '@/js/validataion';
  
  export default {
    data() {
      return {
        usr: {
          userId: '',
          pwd: ''
        }
      }
    },
    created() {
      /// 변수 초기화
      this.usr = {
        userId: '',
        pwd: ''
      };
    },
    mounted() {
      /// 아이디 포커싱
      this.$refs.txtId.focus();
    },
    methods: {
      async login() {
        try {
          /// 아이디 빈칸 & 비밀번호 빈칸 체크
          let errTxt = vd.idMatch(this.usr.userId);
          if (errTxt != '') {
            this.$refs.txtId.focus();
            alert(errTxt);
            return;
          }
          errTxt = vd.pwdMatch(this.usr.pwd);
          if (errTxt != '') {
            this.$refs.txtPwd.focus();
            alert(errTxt);
            return;
          }
  
          /* Pub */
          //this.$router.push('/');
          const res = await this.$axios.post('http://localhost:3000/login', this.usr, {
              withCredentials: true //쿠키도 함께 전송
          });
          if (res.data.code == '0000') {
            /// 정상일 경우 홈으로 이동
            this.$router.push('/');
          } else {
            /// 그 외
            this.$refs.txtId.focus();
            alert(res.data.msg);
            return;
          }
          
        } catch (error) {
          console.log('error: ' + error);
        }
      },
      moveSignUp() {
        this.$router.push('/signUp');
      }
    }
  };
  </script>