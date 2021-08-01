const express = require ('express');
const path = require ('path');
const app = express();
const port = 5000;
const verifytime = require('./VerifyTime');

app.use(verifytime,express.static(path.join(__dirname,'Components')))

app.listen(port,()=>{
    console.log('Open Your Browser At http://127.0.0.1:5000');
})