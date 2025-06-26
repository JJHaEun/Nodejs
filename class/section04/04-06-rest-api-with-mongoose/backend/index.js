import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

import cors from 'cors';
import express from 'express';
import {checkEmail, makeTemplate, sendToEmail} from './email.js';
import mongoose from 'mongoose';
import { Board } from './board.model.js';

const app = express()
const port = 4000




app.use(express.json()) // express json형식 지원하도록 코드 추가
app.use(cors());

app.get('/boards',async (req, res)=>{
    const result = await Board.find()

    res.send(result);
})

// 등록하기
app.post('/boards',async (req,res)=>{
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(req);
    console.log("=====================");
    console.log(req.body);
    // 2. db접속 후 데이터를 저장(또는 가정)

    const board = new Board({
        writer: req.body.writer,
        title: req.body.title,
        contents: req.body.contents,
    });
    await board.save();
    // 3. db에 저장된 결과를 브라우저에 응답주기
    res.send('게시물 등록에 성공하였습니다.')
})

app.post("/tokens/phone",(req,res)=>{
    const myphone = req.body.myphone;
    // 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
    const isValid = checkPhone(myphone);
    if(!isValid) return;

    // 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    // 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);
    res.send("인증 완료!")
})

app.post("/users",(req, res)=>{
    const {name,age,school,email} = req.body;
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkEmail(email)
    if(isValid === false) return

    // 2. 가입환영 템플릿 만들기
    const mytemplate = makeTemplate({name,age,school})

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendToEmail(email,mytemplate);
    res.send("가입완료");
});

mongoose.set("debug",true)

mongoose.connect("mongodb://my-database:27017/mydocker")
.then(() => console.log("db접속에 성공하였습니다."))
.catch(() => console.log("db접속에 실패하였습니다."))

app.listen(port,()=>{
    console.log(`백엔드 ${port} 서버가 켜졌어요!`)
});


