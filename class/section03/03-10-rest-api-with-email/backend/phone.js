 import coolsms from 'coolsms-node-sdk';
 const mysms = coolsms.default; // sdk 가져오기

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

export async function sendTokenToSMS(myphone, myToken) {
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;

    const messageService = new mysms(SMS_KEY,SMS_SECRET);
    const result = await messageService.sendOne({
        to: myphone,
        from: SMS_SENDER,
        text:  `[코드캠프] 안녕하세요, 요청하신 인증번호는 [${myToken}] 입니다.`
    })
    //핸드폰 번호에 토큰 전송하기
    console.log(result);
}