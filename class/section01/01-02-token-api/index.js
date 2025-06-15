
// api만들기
function createTokenOfPhone(zzz) {
    // 번호 자릿수 확인하기
    if (zzz.length <10 || zzz.length >11) {
        console.log("핸드폰 번호를 제대로 입력해주세요.");

        return;//함수 종료
    }

    // 인증 토큰을 자릿수 만큼 만들기
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    console.log(result);

    //핸드폰 번호에 토큰 전송하기
    console.log(zzz + "번호로 인증번호" + result + "를 전송하였습니다.");
}

//api실행하기
createTokenOfPhone("01012345678")