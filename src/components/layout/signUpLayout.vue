<template>
    <div id="signUp">
        <div class="member_box">
            <h1>회원가입</h1>
            <hr>
            <form method="post" action="#">
                <div class="hint">아이디 :</div><input type="text" class="id" placeholder="아이디"/>
                <div class="hint">이름 :</div><input type="text" class="name" placeholder="이름"/>
                <div class="hint">비밀번호 :</div><input type="password" class="pw" placeholder="비밀번호"/>
                <div class="hint">핸드폰번호 :</div><input type="text" class="phone" placeholder="ex)010-0000-0000"/>
                <div class="hint">주소 :</div><input type="text" class="address" placeholder="주소"/>
                <div class="su">
                    <button type="submit" class="btn" v-on:click="signUp">회원가입</button>
                </div>
            </form>
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
      //this.$refs.txtId.focus();
    },
    methods: {
      async signUp() {
        try {
          /// 아이디 빈칸 & 비밀번호 빈칸 체크
          let errTxt = vd.idMatch(this.usr.id);
          if (errTxt != '') {
            //this.$refs.txtId.focus();
            alert(errTxt);
            return;
          }
          errTxt = vd.pwdMatch(this.usr.pwd);
          if (errTxt != '') {
            //this.$refs.txtPwd.focus();
            alert(errTxt);
            return;
          }
  
          /* Pub */
          this.$router.push('/');
  
          /* Dev */
          // const res = await this.$axios.post('/api/login', this.admLogin);
          // if (res.data.code == '0000') {
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
    }
  };
  </script>