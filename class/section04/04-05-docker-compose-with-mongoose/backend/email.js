import {getToday} from './utils.js';
import nodemailer from 'nodemailer';
// 이메일이 정상인지 확인
export function checkEmail(myemail){
    if(myemail === undefined || myemail.includes("@") === false){
        console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!")
        return false
    } else {
        return true
    }
}

// 가입 환영 템플릿 만들기
export function makeTemplate({name,age,school}) {
    const mytemplate = `
    <html>
        <body>
            <h1>가입을 환영합니다.</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${getToday()}</div>
        </body>
    </html>
`;

    return mytemplate;
}

// 해당 이메일에 가입 환영 템플릿 전송하는 api
export async function sendToEmail(email, mytemplate) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })

    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "[코드캠프] 가입을 축하합니다",
        html: mytemplate
    })
    console.log(result)
    // console.log(email + "이메일로 가입환영템플릿" + mytemplate + "를 전송하였습니다.");
}
