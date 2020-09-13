const db = require('../utils/db');
const security = require('../utils/security');

const Login = async (user)=>{
    const getUserSQL = `
    SELECT username, password FROM account WHERE username=? LIMIT 1;`;
    const result = await db.queryOne(getUserSQL, [user.username])
    console.log(result)
    const compare = await security.verifyPassword(
        user.password, 
        result.password
        );
        if(compare){
            //tra ve token
            return security.generateToken({
                username: user.username,
                role: user.role
            })

        }else{
            //tra ve false
            return false

        }

};

module.exports = {
    Login
}