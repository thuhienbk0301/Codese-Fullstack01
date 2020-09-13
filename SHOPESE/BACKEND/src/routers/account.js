const R =require('express').Router();
const accountController = require('../controllers/account')
const authController = require('../controllers/auth')

R.post('/:id',(req,res,next)=>{
    res.send ('get id ok');
    console.log(req.params.id)
});
R.post('/me',(req,res,next)=>{
    res.send ('get me ok');
})

R.post('/', async (req,res,next)=>{
    const newAccount = {
        username: req.body.username,
        password: req.body.password,
       
        
    }
    const result = await accountController.create(newAccount);
    res.send(result);
})

module.exports = R;