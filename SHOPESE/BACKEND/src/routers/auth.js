// authentication
const R = require('express').Router();

R.get('/login', async(req,res,next)=>{
    res.send('login thanh cong')

})
module.exports = R;
