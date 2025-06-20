 // 번호 자릿수 확인하기
export function checkPhone(myphone) {
    if (myphone.length < 10 || myphone.length > 11) {
        console.log("핸드폰 번호를 제대로 입력해주세요.");

        return false;//함수 종료
    } else {
        return true; // 검증에 성공하면 true를 리턴
    }
}


// 인증 토큰을 자릿수 만큼 만들기
export function getToken () {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    console.log(result);
    return result;
}

export function sendTokenToSMS(myphone, myToken) {
    //핸드폰 번호에 토큰 전송하기
    console.log(myphone + "번호로 인증번호" + myToken + "를 전송하였습니다.");
}