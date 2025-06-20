import express from 'express';
import {checkPhone, getToken, sendTokenToSMS} from './phone.js';
const app = express()
const port = 3000



app.get('/boards',(req, res)=>{
    const result = [
        {number:1, writer: "철수",title: "제목입니다.",contents:"내용이에요"},
        {number:2, writer: "영희",title: "영희입니다.",contents:"영희에요"},
        {number:3, writer: "훈이",title: "훈이입니다.",contents:"훈이에요"},
    ]

    res.send(result);
})

app.use(express.json()) // express json형식 지원하도록 코드 추가
// 등록하기
app.post('/boards',(req,res)=>{
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req);
    console.log("=====================");
    console.log(req.body);
    // 2. db접속 후 데이터를 저장(또는 가정)

    // 3. db에 저장된 결과를 브라우저에 응답주기
        res.send('게시물 등록에 성공하였습니다.')
})

app.post("/tokens/phone",(req,res)=>{
    const myphone = req.body.qqq;
    // 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
    const isValid = checkPhone(myphone);
    if(!isValid) return;

    // 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    // 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);
    res.send("인증 완료!")
})

app.listen(port,()=>{
    console.log(`백엔드 ${port} 서버가 켜졌어요!`)
})



