// 검증 관련 함수
const validation = {
    /// 빈값 확인
    idMatch: function(txt) {
        let retTxt = '';
        /// 아이디 체크 로직 추가
        if (txt.trim() == '') {
            retTxt = '아이디를 입력해 주세요.';
        }

        return retTxt;
    },

    /// 이메일
    emailMatch: function(txt, blankFlg) {
        /// [blankFlg] 빈칸 체크 여부(true: 빈칸 체크, false: 빈칸 체크 안함)
        // eslint-disable-next-line
        const regExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

        let retTxt = '';

        if (blankFlg && txt.trim() == '') {
            retTxt = '입력해 주세요.';
            return retTxt;
        }

        if (txt.match(regExp) != null) {
            retTxt = '';
        } else {
            retTxt = '다시 입력해 주세요.';
        }

        return retTxt;
    },

    /// 비밀번호
    pwdMatch: function(txt) {
        let retTxt = '';
        /// 비번 체크 로직 추가

        if (txt.trim() == '') {
            retTxt = '비밀번호를 입력해 주세요.';
        }

        return retTxt;
    }
}

export default validation