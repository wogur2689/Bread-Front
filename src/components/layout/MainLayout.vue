<template>
    <div class="login-bg">
      <div class="login-wrap">
        <div>
          <!-- /// 이미지(+svg) 테스트 -->
          <img src="@/assets/logo.svg" alt="logo"/>
          <div class="text-center">
            hyeok's bakery!
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
          id: '',
          pwd: ''
        }
      }
    },
    created() {
      /// 변수 초기화
      this.usr = {
        id: '',
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
          let errTxt = vd.idMatch(this.usr.id);
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
          this.$router.push('/');
  
          /* Dev */
          // const res = await this.$axios.post('/api/login', this.admLogin);
          // if (res.data.rCode == '0000') {
          //   /// 정상일 경우 홈으로 이동
          //   this.adm = res.data.rData;
          //   this.$router.push('/main');
          // } else {
          //   /// 그 외
          //   this.$refs.txtId.focus();
          //   alert(res.data.rMsg);
          //   return;
          // }
          
        } catch (error) {
          console.log('error: ' + error);
        }
      }
      /*
      ////// 테스트용 axios 사용 > tb_roles 정보 조회만 하고 로그인 되도록 해놓음(추후 변경 에정)
      async login() {
        let self = this;
  
        /// 아이디 빈칸 & 이메일 정규식 체크
        let idTxt = vd.emailMatch(this.adm.admId, true);
        if (idTxt !== '') {
          alert('아이디를 ' + idTxt);
          return;
        }
  
        /// 비밀번호 빈칸 체크
        let pwdTxt = vd.pwdMatch(this.adm.admPwd);
        if (pwdTxt !== '') {
          alert(pwdTxt);
          return;
        }
  
        try {
          const res = await this.$axios.post('/api/login', this.adm);
          if (res.data.rCode == '0000') {
            /// 정상일 경우 홈으로 이동
            self.$router.push('/main');
          } else {
            /// 그 외
            alert(res.data.rMsg);
            self.$router.push('/main');
            return;
          }
        } catch (err) {
          console.log('error: ' + err);
        }
      }
      */
    }
  };
  </script>