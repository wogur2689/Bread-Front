<template>
    <div id="signUp">
        <div class="member_box">
            <h1>회원가입</h1>
            <hr>
            <form method="post">
                <div class="hint">아이디 :</div><input type="text" ref="userId" v-model.trim="usr.userId" placeholder="아이디"/>
                <div class="hint">이름 :</div><input type="text" ref="name" v-model.trim="usr.name" placeholder="이름"/>
                <div class="hint">비밀번호 :</div><input type="password" ref="pwd" v-model.trim="usr.pwd" placeholder="비밀번호"/>
                <div class="hint">나이 :</div><input type="text" ref="age" v-model.trim="usr.age" placeholder="나이"/>
                <div class="hint">핸드폰번호 :</div><input type="text" ref="phone" v-model.trim="usr.phone" placeholder="ex)010-0000-0000"/>
                <div class="hint">주소 :</div><input type="text" ref="address" v-model.trim="usr.address" placeholder="주소"/>
                <div class="su">
                    <button type="button" class="btn" v-on:click="signUp">회원가입</button>
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
          userId: '',
          name: '',
          pwd: '',
          age: '',
          phone: '',
          address: ''
        }
      }
    },
    created() {
      /// 변수 초기화
      this.usr = {
        userId: '',
        name: '',
        age: '',
        pwd: '',
        phone: '',
        address: ''
      };
    },
    mounted() {
      /// 아이디 포커싱
      this.$refs.userId.focus();
    },
    methods: {
      isErrTxt(errTxt) {
        if (errTxt != '') {
            alert(errTxt);
            return true;
        }
        return false;
      },
      async signUp() {
        try {
          /// 아이디 빈칸 & 비밀번호 빈칸 체크
          let errTxt = vd.idMatch(this.usr.userId);
          if (this.isErrTxt(errTxt)) return;
          
          errTxt = vd.pwdMatch(this.usr.pwd);
          if (this.isErrTxt(errTxt)) return;

          errTxt = vd.pwdMatch(this.usr.age);
          if (this.isErrTxt(errTxt)) return;

          errTxt = vd.pwdMatch(this.usr.name);
          if (this.isErrTxt(errTxt)) return;
          
          errTxt = vd.pwdMatch(this.usr.phone);
          if (this.isErrTxt(errTxt)) return;
          
          errTxt = vd.pwdMatch(this.usr.address);
          if (this.isErrTxt(errTxt)) return;

          // Pub
          //this.$router.push('/');
          
          const res = await this.$axios.post('http://localhost:3000/signUp', this.usr);
          if (res.data.code == '0000') {
          /// 정상일 경우 로그인으로 이동
          this.usr = res.data.info;
          this.$router.push('/login');
          } else {
          /// 그 외
            this.$refs.id.focus();
            alert(res.data.msg);
            return;
          }
          
        } catch (error) {
          console.log('error: ' + error);
        }
      }
    }
  };
  </script>