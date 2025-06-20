import express from 'express'
const app = express()
const port = 3000



app.get('/',(req, res)=>{
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`백엔드 ${port} 서버가 켜졌어요!`)
})