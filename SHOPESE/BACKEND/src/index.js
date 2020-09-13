require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.json())

//controller
const accountRouter = require('./routers/account')
const authRouter = require('./routers/auth')
app.use('/api/account',accountRouter)
app.use('/api/auth',authRouter)

const log = (req,res,next)=>{
    console.log('=============')
    console.log('req.originUrl\t', req.originalUrl)
    console.log('req.query\t', req.query);
    console.log('req.body\t', req.body);
    console.log('req.params\t', req.params);
    next();

}


app.use(log);
app.listen(9999,(err)=>{
    if(err) console.log('err',err);
    console.log("API running at 9999")

})