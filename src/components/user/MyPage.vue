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
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {

    },
    created() {

    },
    mounted() {
        
    },
    methods: {
    }
};
</script>