import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swagger/config.js';

import cors from 'cors';
import express from 'express';
import {checkEmail, makeTemplate, sendToEmail} from './email.js';

const app = express()
const port = 3000




app.use(express.json()) // express json형식 지원하도록 코드 추가
app.use(cors());

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

app.listen(port,()=>{
    console.log(`백엔드 ${port} 서버가 켜졌어요!`)
});


