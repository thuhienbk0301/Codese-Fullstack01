const Login = async = (req,res,next)=>{
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    //const result = await authService.Login(user);

    const result = false;
    if(result){
        res.send({
            status:1,
            token: 've xem phim'
        })
    }else{
        res.send({
            status:0,
            token:'dang nhap that bai'
        })
    }

}

module.exports = {
    Login
}