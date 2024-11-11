<template>
    <div id="mypage">
        <div class="member_box">
            <h1>마이페이지</h1>
            <hr>
            <form method="post">
                <div class="hint">아이디 :</div><input type="text" ref="userId" v-bind:value="usr.userId" />
                <div class="hint">이름 :</div><input type="text" ref="name" v-bind:value="usr.name"/>
                <div class="hint">비밀번호 :</div><input type="password" ref="pwd" v-bind:value="usr.pwd"/>
                <div class="hint">나이 :</div><input type="text" ref="age" v-bind:value="usr.age"/>
                <div class="hint">핸드폰번호 :</div><input type="text" ref="phone" v-bind:value="usr.phone"/>
                <div class="hint">주소 :</div><input type="text" ref="address" v-bind:value="usr.address"/>
                <div class="su">
                    <button type="button" class="btn" v-on:click="myPageUpdate">수정하기</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// js 정규화 검증
//import vd from '@/js/validataion';

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
            name: '',
            age: '',
            pwd: '',
            phone: '',
            address: ''
        };
    },
    mounted() {
        //페이지가 랜더링 된 후 API 호출
        //this.getMyPageData();
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

        async getMyPageData() {
            const res = await this.$axios.post('http://localhost:3000/api/myPageUpdate', this.usr);
            if (res.data.code == '0000') {
                // 정상일 경우
                this.usr = res.data.info;
            } else {
                this.usr = null;
            }
        },

        // 마이페이지 수정하기
        async myPageUpdate() {
            try {
            // 아이디 빈칸 & 비밀번호 빈칸 체크
            //errTxt = vd.pwdMatch(this.usr.pwd);
            //if (this.isErrTxt(errTxt)) return;

            //errTxt = vd.pwdMatch(this.usr.age);
            //if (this.isErrTxt(errTxt)) return;

            //errTxt = vd.pwdMatch(this.usr.name);
            //if (this.isErrTxt(errTxt)) return;
            
            //errTxt = vd.pwdMatch(this.usr.phone);
            //if (this.isErrTxt(errTxt)) return;
            
            //errTxt = vd.pwdMatch(this.usr.address);
            //if (this.isErrTxt(errTxt)) return;
            
            const res = await this.$axios.post('http://localhost:3000/api/myPageUpdate', this.usr);
            if (res.data.code == '0000') {
                // 정상
                this.usr = res.data.info;
            } else {
                // 그 외
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