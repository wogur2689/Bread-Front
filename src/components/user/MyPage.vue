<template>
    <div id="mypage">
        <div class="member_box">
            <h1>마이페이지</h1>
            <hr>
            <form method="post">
                <div class="hint">아이디 :</div><input type="text" ref="userId" placeholder="아이디"/>
                <div class="hint">이름 :</div><input type="text" ref="name" placeholder="이름"/>
                <div class="hint">비밀번호 :</div><input type="password" ref="pwd" placeholder="비밀번호"/>
                <div class="hint">나이 :</div><input type="text" ref="age" placeholder="나이"/>
                <div class="hint">핸드폰번호 :</div><input type="text" ref="phone" placeholder="ex)010-0000-0000"/>
                <div class="hint">주소 :</div><input type="text" ref="address" placeholder="주소"/>
                <div class="su">
                    <button type="button" class="btn" v-on:click="myPageUpdate">수정하기</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// js 정규화 검증
import vd from '@/js/validataion';

export default {
    data() {
        return {
            usr: {
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
            name: '',
            age: '',
            pwd: '',
            phone: '',
            address: ''
        };
    },
    mounted() {

    },
    methods: {
        // error message alert
        isErrTxt(errTxt) {
            if (errTxt != '') {
                alert(errTxt);
                return true;
            }
            return false;
        },

        // 회원가입
        async myPageUpdate() {
            try {
            // 아이디 빈칸 & 비밀번호 빈칸 체크
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
            
            const res = await this.$axios.post('http://localhost:3000/myPage/Update', this.usr);
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